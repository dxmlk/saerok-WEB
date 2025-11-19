import { scaledStyle } from "@/utils/scaleStyle";

interface EtiquetteDescriptionProps {
  scale?: number;
  descriptionTop: string;
  descriptionBottom: string;
  isFirst: boolean;
  isLast: boolean;
}

const EtiquetteDescription = ({
  scale = 1,
  descriptionTop,
  descriptionBottom,
  isFirst,
  isLast,
}: EtiquetteDescriptionProps) => {
  return (
    <div
      className={`w-full border border-mainBlue flex flex-col justify-start font-400 text-mainBlue z-10 rounded-[20px] ${
        isFirst ? "rounded-tl-none" : isLast ? "rounded-tr-none" : ""
      }`}
      style={scaledStyle(scale, {
        height: 170,
        borderWidth: 4,
        paddingLeft: 49,
        paddingRight: 49,
        paddingTop: 52,
        paddingBottom: 52,
        gap: 16,
        fontSize: 24,
        lineHeight: 25,
        letterSpacing: -1,
      })}
    >
      <span>{descriptionTop}</span>
      <span>{descriptionBottom}</span>
    </div>
  );
};

export default EtiquetteDescription;
