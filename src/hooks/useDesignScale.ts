import { useEffect, useState } from "react";
const DESIGN_HEIGHT = 925;

export function useDesignScale() {
  const [scale, setScale] = useState(() =>
    typeof window !== "undefined" ? window.innerHeight / DESIGN_HEIGHT : 1
  );

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerHeight / DESIGN_HEIGHT);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return scale;
}
