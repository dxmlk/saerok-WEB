import { ReactComponent as RectangleEdge } from "@/assets/images/edge.svg";
import birdImage from "@/assets/images/BirdImg.png";
import { scaledStyle } from "@/utils/scaleStyle";

interface SaerokCarouselCardProps {
  scale?: number;
}

const SaerokCarouselCard = ({ scale = 1 }: SaerokCarouselCardProps) => {
  return (
    <div
      className="slide shrink-0 w-343 h-455 flex justify-center items-center bg-background-lightWhitegray border-none rounded-20"
      style={scaledStyle(scale, {
        width: 343,
        height: 455,
        borderRadius: 20,
      })}
    >
      <main
        className="w-323 h-435 border-none rounded-10 bg-white"
        style={scaledStyle(scale, { width: 323, height: 435 })}
      >
        <section
          className="w-full h-350 relative"
          style={scaledStyle(scale, { height: 350 })}
        >
          <img
            className="absolute inset-0 w-full h-auto object-cover"
            src={birdImage}
            alt="BirdImage"
          />
          <div className="absolute -bottom-6 left-0 flex -space-x-1 items-center">
            <div className="bg-background-white h-43 pl-12 pr-4 flex items-center">
              <span className="text-headline-2-2 font-moneygraphy text-black font-400">
                검은댕기수리
              </span>
            </div>
            <RectangleEdge />
          </div>
        </section>
        <section
          className="w-full h-85 pt-8 pb-9 pl-12 pr-9 flex flex-col text-caption-1 font-400 "
          style={scaledStyle(scale, {
            height: 85,
            paddingTop: 8,
            paddingBottom: 9,
            paddingLeft: 12,
            paddingRight: 9,
            fontSize: 13,
            lineHeight: 16,
          })}
        >
          <div
            className="w-full flex flex-row justify-between mb-2"
            style={scaledStyle(scale, { marginBottom: 2 })}
          >
            <span className="text-font-darkGray">21 February, 2025</span>
            <span className="text-font-gray">SRK-X1C2A</span>
          </div>
          <span className="text-font-darkGray ">성북천 다리 아래에서</span>
          <div
            className="text-mainBlue mt-18 space-x-3"
            style={scaledStyle(scale, { marginTop: 18 })}
          >
            <span>#일상속의탐조일지</span>
            <span className="font-700">#새록</span>
          </div>
        </section>
      </main>
    </div>
  );
};
export default SaerokCarouselCard;
