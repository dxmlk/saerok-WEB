import { PROCESS_CARDS } from "@/constants/ProcessCards";
import ProcessCard from "../components/ProcessCard";
import { scaledStyle } from "@/utils/scaleStyle";

interface ProcessFlowProps {
  scale?: number;
}

const ProcessFlow = ({ scale = 1 }: ProcessFlowProps) => {
  return (
    <div
      className="w-full flex flex-col items-center "
      style={scaledStyle(scale, { marginTop: 109, marginBottom: 206 })}
    >
      {PROCESS_CARDS.map((card, index) => {
        return <ProcessCard scale={scale} processCard={PROCESS_CARDS[index]} />;
      })}
    </div>
  );
};

export default ProcessFlow;
