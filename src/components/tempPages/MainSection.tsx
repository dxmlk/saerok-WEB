import { ReactComponent as MainSvg } from "@/assets/images/main.svg";

interface MainSectionProps {
  isMobile?: boolean;
  scale?: number;
}

const MainSection = ({ isMobile, scale = 1 }: MainSectionProps) => {
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
