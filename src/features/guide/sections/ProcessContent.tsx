import { scaledStyle } from "@/utils/scaleStyle";
import ContentHeader from "../components/ContentHeader";
import ProcessFlow from "./ProcessFlow";

interface ProcessContentProps {
  scale?: number;
}

const ProcessContent = ({ scale = 1 }: ProcessContentProps) => {
  return (
    <div
      className="w-full bg-background-white "
      style={scaledStyle(scale, {
        paddingLeft: 120,
        paddingRight: 120,
        paddingTop: 125,
        paddingBottom: 132,
      })}
    >
      <ContentHeader
        scale={scale}
        title="탐조 방법 - 즐겁고 올바르게 새 관찰하기"
        detail={`탐조는 특별한 기술이 필요한 활동이 아니에요.\n단지 '조용히 보고, 느끼는 마음'이 가장 중요해요.`}
      />
      <ProcessFlow scale={scale} />
    </div>
  );
};

export default ProcessContent;
