import IntroSection from "@/components/IntroSection";
import { useDesignScaleValue } from "@/design/DesignScaleContext";
import GuideMain from "@/features/guide/sections/GuideMain";

const GuidePage = () => {
  const scale = useDesignScaleValue();

  return (
    <div className="bg-background-lightWhitegray ">
      <IntroSection
        mainText="탐조는 어떻게 하나요?"
        subText="탐린이를 위한 새록의 탐조 가이드"
        isWhite={true}
        scale={scale}
      />
      <GuideMain scale={scale} />
    </div>
  );
};
export default GuidePage;
