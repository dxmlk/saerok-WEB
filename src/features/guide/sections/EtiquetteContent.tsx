import { scaledStyle } from "@/utils/scaleStyle";
import EtiquetteCards from "./EtiquetteCards";

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
      <header
        className="text-mainBlue flex flex-col"
        style={scaledStyle(scale, {
          gap: 16,
          marginBottom: 50,
        })}
      >
        <span
          className="font-700"
          style={scaledStyle(scale, { fontSize: 36, lineHeight: 50 })}
        >
          탐조 에티켓 - 새와 자연을 존중하는 마음
        </span>
        <span
          className="font-400 whitespace-pre-line "
          style={scaledStyle(scale, {
            fontSize: 20,
            lineHeight: 25,
            letterSpacing: -1,
          })}
        >
          탐조의 가장 중요한 기본은 새를 놀라게 하지 않고, 자연을 훼손하지 않는
          것이에요. {"\n"}새와 자연 모두 우리의 배려를 필요로 해요.
        </span>
      </header>
      <EtiquetteCards scale={scale} />
    </div>
  );
};

export default EtiquetteContent;
