import saerokLogo from "@/assets/icons/logo.svg?url";
import saerokTypo from "@/assets/icons/typo.svg?url";
import { getStoreUrlForDevice } from "@/utils/storeLinks";

interface MobileHeaderProps {
  scale?: number;
  disableNavigation?: boolean;
}

const MobileHeader = ({
  scale = 1,
  disableNavigation = true,
}: MobileHeaderProps) => {
  const storeUrl = getStoreUrlForDevice();

  const handleClickLogo = () => {
    if (disableNavigation) return;
    // 여기 원래 navigate("/") 있었음
  };
  return (
    <header className="pl-22 pr-22 w-full h-65 bg-white">
      <div className="flex flex-row  items-center justify-between">
        <div
          className="flex flex-row items-center gap-5 h-67"
          style={{
            height: `${67 * scale}px`,
            gap: `${5 * scale}px`,
          }}
          onClick={handleClickLogo}
        >
          <img src={saerokLogo} alt="saerok-logo" />
          <img src={saerokTypo} alt="saerok-typo" />
        </div>
        <a
          href={storeUrl}
          className={`text-body-1 font-700 text-mainBlue`}
          style={{
            fontSize: `${15 * scale}px`,
            lineHeight: `${18 * scale}px`,
          }}
        >
          앱 설치
        </a>
      </div>
    </header>
  );
};

export default MobileHeader;
