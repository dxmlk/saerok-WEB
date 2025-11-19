import { scaledStyle } from "@/utils/scaleStyle";
import EtiquetteCards from "./EtiquetteCards";
import ContentHeader from "../components/ContentHeader";

interface EtiquetteContentProps {
  scale?: number;
}

const EtiquetteContent = ({ scale = 1 }: EtiquetteContentProps) => {
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
        title="탐조 에티켓 - 새와 자연을 존중하는 마음"
        detail={`탐조의 가장 중요한 기본은 새를 놀라게 하지 않고, 자연을 훼손하지 않는 것이에요.\n새와 자연 모두 우리의 배려를 필요로 해요.`}
      />

      <EtiquetteCards scale={scale} />
    </div>
  );
};

export default EtiquetteContent;
