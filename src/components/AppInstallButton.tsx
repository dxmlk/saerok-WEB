import logoWhite from "@/assets/icons/app-logo-white.svg?url";
import logo from "@/assets/icons/app-logo.svg?url";
import { getStoreUrlForDevice } from "@/utils/storeLinks";

interface AppInstallButtonProps {
  scale?: number;
  isFooter?: boolean;
}
const AppInstallButton = ({
  scale = 1,
  isFooter = false,
}: AppInstallButtonProps) => {
  const storeUrl = getStoreUrlForDevice();

  return (
    <div
      className="flex flex-row items-center gap-7"
      style={{
        gap: `${7 * scale}px`,
      }}
    >
      <img
        src={isFooter ? logoWhite : logo}
        alt="saerok-app-logo"
        style={{ height: `${22 * scale}px`, width: `${22 * scale}px` }}
      />
      <a
        href={storeUrl}
        className={`text-body-1 ${
          isFooter ? "font-400 text-background-white" : "font-700 text-mainBlue"
        } `}
        style={{
          fontSize: `${15 * scale}px`,
          lineHeight: `${18 * scale}px`,
        }}
      >
        새록 앱 설치
      </a>
    </div>
  );
};
export default AppInstallButton;
