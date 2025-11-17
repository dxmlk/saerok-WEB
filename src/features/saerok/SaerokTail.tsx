import qrCode from "@/assets/images/qr-code.png";
import { scaledStyle } from "@/utils/scaleStyle";

interface ExploreTailProps {
  scale?: number;
}

const ExploreTail = ({ scale = 1 }: ExploreTailProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={scaledStyle(scale, {
        marginTop: 183,
        marginBottom: 191,
      })}
    >
      <span
        className="text-mainBlue font-400"
        style={scaledStyle(scale, {
          fontSize: 50,
          lineHeight: 50,
          letterSpacing: -4,
          marginBottom: 37,
        })}
      >
        새록과 함께하세요
      </span>
      <img
        src={qrCode}
        alt="QR Code"
        style={scaledStyle(scale, {
          marginBottom: 9,
        })}
      />
      <img
        src="src/assets/images/appstore.png"
        alt="Available on the App Store"
      />
    </div>
  );
};

export default ExploreTail;
