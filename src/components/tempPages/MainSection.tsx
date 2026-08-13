import { ReactComponent as MobileMainSvg } from "@/assets/images/mobile-main.svg";
import { ReactComponent as WebMainSvg } from "@/assets/images/web-main.svg";

interface MainSectionProps {
  isMobile?: boolean;
  scale?: number;
}

const MainSection = ({ isMobile, scale = 1 }: MainSectionProps) => {
  const MainSvg = isMobile ? MobileMainSvg : WebMainSvg;

  return (
    <main
      className="w-full bg-mainBlue flex justify-center items-center "
      style={{
        height: `${1138 * scale}px`,
      }}
    >
      <MainSvg />
    </main>
  );
};

export default MainSection;
