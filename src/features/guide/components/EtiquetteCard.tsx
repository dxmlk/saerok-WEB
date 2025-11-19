import { scaledStyle } from "@/utils/scaleStyle";

interface EtiquetteCardProps {
  scale?: number;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  isActive: boolean;
}

const EtiquetteCard = ({
  scale = 1,
  Icon,
  title,
  isActive,
}: EtiquetteCardProps) => {
  return (
    <div
      className={`bg-mainBlue text-background-white font-700 flex flex-col items-center justify-center rounded-[20px] ${
        isActive ? "rounded-b-none" : ""
      }`}
      style={scaledStyle(scale, {
        width: 243,
        height: 274,
        fontSize: 24,
        lineHeight: 28,
        letterSpacing: -1,
        gap: 23,
      })}
    >
      <Icon style={scaledStyle(scale, { width: 158, height: 158 })} />
      <span>{title}</span>
    </div>
  );
};

export default EtiquetteCard;
