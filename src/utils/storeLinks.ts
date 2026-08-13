export const APP_STORE_URL =
  "https://apps.apple.com/kr/app/%EC%83%88%EB%A1%9D-%EC%9D%BC%EC%83%81-%EC%86%8D%EC%9D%98-%ED%83%90%EC%A1%B0-%EC%9D%BC%EC%A7%80/id6744866662";

export const PLAY_STORE_APP_URL = "market://details?id=com.apu.saerok";

export const PLAY_STORE_WEB_URL =
  "https://play.google.com/store/apps/details?id=com.apu.saerok";

export const getDevicePlatform = () => {
  const ua = navigator.userAgent || navigator.vendor;

  const isIOS =
    /iPhone|iPad|iPod/i.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isIOS) return "ios";
  if (/Android/i.test(ua)) return "android";

  return "other";
};

export const getStoreUrlForDevice = () => {
  return getDevicePlatform() === "android" ? PLAY_STORE_WEB_URL : APP_STORE_URL;
};
