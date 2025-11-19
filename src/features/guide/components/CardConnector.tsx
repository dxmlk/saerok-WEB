import { scaledStyle } from "@/utils/scaleStyle";
import { ReactComponent as LeftConnector } from "@/assets/images/connector/connector-left.svg";
import { ReactComponent as RightConnector } from "@/assets/images/connector/connector-right.svg";

type ConnectorVariant = "first-left" | "left" | "right" | "last-right";

interface CardConnectorProps {
  scale?: number;
  variant: ConnectorVariant;
}

const CardConnector = ({ scale = 1, variant }: CardConnectorProps) => {
  const baseStyle = scaledStyle(scale, { width: 16, height: 11 });

  if (variant === "first-left") {
    // 첫 번째 카드의 왼쪽 끝
    return (
      <RightConnector
        className="pointer-events-none absolute -bottom-1 left-0"
        style={baseStyle}
      />
    );
  }

  if (variant === "left") {
    // 중간/마지막 카드의 왼쪽 (조금 안쪽으로)
    return (
      <LeftConnector
        className="pointer-events-none absolute -bottom-1"
        style={scaledStyle(scale, { width: 16, height: 11, left: -11 })}
      />
    );
  }

  if (variant === "right") {
    // 첫/중간 카드의 오른쪽 (조금 바깥으로)
    return (
      <RightConnector
        className="pointer-events-none absolute -bottom-1"
        style={scaledStyle(scale, { width: 16, height: 11, right: -11 })}
      />
    );
  }

  // last-right
  return (
    <LeftConnector
      className="pointer-events-none absolute -bottom-1 right-0"
      style={baseStyle}
    />
  );
};

export default CardConnector;
