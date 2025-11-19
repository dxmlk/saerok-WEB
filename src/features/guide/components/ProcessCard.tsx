import type { ProcessCardItem } from "@/types/card";
import { scaledStyle } from "@/utils/scaleStyle";

interface ProcessCardProps {
  scale?: number;
  processCard: ProcessCardItem;
}

const ProcessCard = ({ scale = 1, processCard }: ProcessCardProps) => {
  return (
    <div
      className="flex flex-row"
      style={scaledStyle(scale, {
        gap: processCard.gapValue,
        marginBottom: processCard.marginBottom,
      })}
    >
      {processCard.iconLocation === "left" && <processCard.Icon />}
      <div
        className={`flex flex-col justify-start text-mainBlue ${
          processCard.startPoint === "top" ? "justify-start" : "justify-end"
        } `}
        style={scaledStyle(scale, {
          gap: 20,
          lineHeight: 50,
          ...(processCard.startPoint === "top"
            ? { marginTop: processCard.marginValue }
            : { marginBottom: processCard.marginValue }),
        })}
      >
        <span className="font-700" style={scaledStyle(scale, { fontSize: 48 })}>
          {String(processCard.id).padStart(2, "0")}
        </span>
        <span className="font-700" style={scaledStyle(scale, { fontSize: 36 })}>
          {processCard.title}
        </span>
        <span
          className="font-400 whitespace-pre-line"
          style={scaledStyle(scale, {
            fontSize: 20,
            lineHeight: 25,
            letterSpacing: -1,
          })}
        >
          {processCard.description}
        </span>
      </div>
      {processCard.iconLocation === "right" && <processCard.Icon />}
    </div>
  );
};

export default ProcessCard;
