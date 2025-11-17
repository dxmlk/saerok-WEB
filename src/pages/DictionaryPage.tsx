import GlassBall from "@/components/GlassBall";

import background from "@/assets/images/background.jpg";
import { useDesignScaleValue } from "@/design/DesignScaleContext";

const DictionaryPage = () => {
  const scale = useDesignScaleValue();

  return (
    <div className="relative h-full w-full">
      <img
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        src={background}
        alt=""
      />
      <GlassBall />
    </div>
  );
};

export default DictionaryPage;
