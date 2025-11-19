import IntroSection from "@/components/IntroSection";
import { useDesignScaleValue } from "@/design/DesignScaleContext";
import EtiquetteContent from "@/features/guide/sections/EtiquetteContent";

const EtiquettePage = () => {
  const scale = useDesignScaleValue();

  return (
    <div className="bg-background-lightWhitegray ">
      <IntroSection
        mainText="초보 탐조자를 위한 탐조 가이드"
        subText="아름다운 자연 속에서 새를 관찰하는 ‘탐조'는 누구나 즐길 수 있는 멋진 취미예요. 
                새록 가이드를 통해 자연을 존중하며 새를 만나는 즐거움을 배워보세요!"
        isGuide={true}
        scale={scale}
      />
      <EtiquetteContent scale={scale} />
    </div>
  );
};

export default EtiquettePage;
