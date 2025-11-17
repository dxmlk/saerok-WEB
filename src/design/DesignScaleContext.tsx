import { createContext, useContext } from "react";
import { useDesignScale } from "@/hooks/useDesignScale";

const DesignScaleContext = createContext(1);

export function DesignScaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  {
    const scale = useDesignScale();
    return (
      <DesignScaleContext.Provider value={scale}>
        {children}
      </DesignScaleContext.Provider>
    );
  }
}

export const useDesignScaleValue = () => useContext(DesignScaleContext);
