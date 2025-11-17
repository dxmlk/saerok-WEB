import IntroSection from "@/components/IntroSection";
import SaerokTail from "@/features/saerok/SaerokTail";
import SaerokList from "@/features/saerok/SaerokList";
import { useDesignScaleValue } from "@/design/DesignScaleContext";

const ExplorePage = () => {
  const scale = useDesignScaleValue();

  return (
    <div className=" bg-background-white ">
      <IntroSection
        mainText="내가 찍은 새를 공유해보세요"
        subText="내 주변의 새를 찾고, 공유하고, 소통할 수 있어요."
        isWhite={false}
        scale={scale}
      />
      <SaerokList scale={scale} />
      <SaerokTail scale={scale} />
    </div>
  );
};

export default ExplorePage;
