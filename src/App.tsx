import { useEffect } from "react";
import "./App.css";
import { Mobile, PC } from "./components/Responsive";
import MobilePage from "./components/tempPages/MobilePage";
import PCPage from "./components/tempPages/PCPage";
import {
  APP_STORE_URL,
  PLAY_STORE_APP_URL,
  PLAY_STORE_WEB_URL,
  getDevicePlatform,
} from "./utils/storeLinks";

function App() {
  useEffect(() => {
    const platform = getDevicePlatform();

    if (platform === "ios") {
      window.location.href = APP_STORE_URL;
      return;
    }

    if (platform === "android") {
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
