import GuideCard from "@/features/guide/components/GuideCard";
import DuckBlueSrc from "@/assets/images/duck-rectangle/duck-blue.png";
import DuckPinkSrc from "@/assets/images/duck-rectangle/duck-pink.png";
import DuckPurpleSrc from "@/assets/images/duck-rectangle/duck-purple.png";
import { scaledStyle } from "@/utils/scaleStyle";

interface GuideMainProps {
  scale?: number;
}

const GuideMain = ({ scale = 1 }: GuideMainProps) => {
  return (
    <div
      className="grid grid-cols-3 w-full h-full"
      style={scaledStyle(scale, {
        paddingLeft: 120,
        paddingRight: 120,
        paddingTop: 104,
        paddingBottom: 109,
        gap: 50,
      })}
    >
      <GuideCard imgSrc={DuckBlueSrc} scale={scale} moveTo="etiquette">
        <div
          className="text-background-white text-center"
          style={scaledStyle(scale, {
            fontSize: 30,
            lineHeight: 28,
            letterSpacing: -1.5,
          })}
        >
          <span className="font-700">탐조 에티켓</span>
          <span className="font-400 ">
            을 <br />
            가르쳐드릴개요.
          </span>
        </div>
      </GuideCard>
      <GuideCard imgSrc={DuckPinkSrc} scale={scale} moveTo="process">
        <div
          className="text-background-white text-center"
          style={scaledStyle(scale, {
            fontSize: 30,
            lineHeight: 28,
            letterSpacing: -1.5,
          })}
        >
          <span className="font-700">탐조 방법</span>
          <span className="font-400 ">
            이 <br />
            궁금하새요?
          </span>
        </div>
      </GuideCard>
      <GuideCard imgSrc={DuckPurpleSrc} scale={scale} moveTo="tips">
        <div
          className="text-background-white text-center"
          style={scaledStyle(scale, {
            fontSize: 30,
            lineHeight: 28,
            letterSpacing: -1.5,
          })}
        >
          <span className="font-700">탐조 팁</span>
          <span className="font-400 ">
            에는 <br />
            어떤 게 있을꽈여.
          </span>
        </div>
      </GuideCard>
    </div>
  );
};

export default GuideMain;
