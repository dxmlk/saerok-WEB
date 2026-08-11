import { useEffect } from "react";
import "./App.css";
import { Mobile, PC } from "./components/Responsive";
import MobilePage from "./components/tempPages/MobilePage";
import PCPage from "./components/tempPages/PCPage";

const APP_STORE_URL =
  "https://apps.apple.com/kr/app/%EC%83%88%EB%A1%9D-%EC%9D%BC%EC%83%81-%EC%86%8D%EC%9D%98-%ED%83%90%EC%A1%B0-%EC%9D%BC%EC%A7%80/id6744866662";
const PLAY_STORE_APP_URL = "market://details?id=com.apu.saerok";
const PLAY_STORE_WEB_URL =
  "https://play.google.com/store/apps/details?id=com.apu.saerok";

function App() {
  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;

    const isIOS =
      /iPhone|iPad|iPod/i.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isAndroid = /Android/i.test(ua);

    if (isIOS) {
      window.location.href = APP_STORE_URL;
      return;
    }

    if (isAndroid) {
      window.location.href = PLAY_STORE_APP_URL;

      window.setTimeout(() => {
        window.location.href = PLAY_STORE_WEB_URL;
      }, 1000);
    }
  }, []);

  return (
    <>
      <Mobile>
        <MobilePage />
      </Mobile>
      <PC>
        <PCPage />
      </PC>
    </>
  );
}

export default App;
