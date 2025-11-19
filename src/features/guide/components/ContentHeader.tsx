import { scaledStyle } from "@/utils/scaleStyle";

interface ContenHeaderProps {
  scale?: number;
  title?: string;
  detail?: string;
}
const ContentHeader = ({ scale = 1, title, detail }: ContenHeaderProps) => {
  return (
    <>
      <header
        className="text-mainBlue flex flex-col"
        style={scaledStyle(scale, {
          gap: 16,
          marginBottom: 50,
        })}
      >
        <span
          className="font-700"
          style={scaledStyle(scale, { fontSize: 36, lineHeight: 50 })}
        >
          {title}
        </span>
        <span
          className="font-400 whitespace-pre-line "
          style={scaledStyle(scale, {
            fontSize: 20,
            lineHeight: 25,
            letterSpacing: -1,
          })}
        >
          {detail}
        </span>
      </header>
    </>
  );
};

export default ContentHeader;
