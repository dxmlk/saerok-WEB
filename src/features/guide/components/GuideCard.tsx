import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import guideButton from "@/assets/icons/guide-button.svg?url";
import { scaledStyle } from "@/utils/scaleStyle";

interface GuideCardProps {
  imgSrc?: string;
  children: React.ReactNode;
  moveTo?: string;
  scale?: number;
}

const GuideCard = ({ imgSrc, children, moveTo, scale = 1 }: GuideCardProps) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.set(cardRef.current, {
      scale: 1,
      transformOrigin: "center center",
      willChange: "transform",
    });
  }, []);

  const handleEnter = () => {
    const el = cardRef.current;
    if (!el) return;
    gsap.to(el, { scale: 1.04, duration: 0.28, ease: "power2.out" });
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    gsap.to(el, { scale: 1, duration: 0.28, ease: "power2.out" });
  };

  const handleClick = () => {
    navigate(`/guide/${moveTo}`);
  };

  return (
    <div
      ref={cardRef}
      className="w-full aspect-[367/592] relative border-none flex-shrink-0 cursor-pointer"
      style={scaledStyle(scale, {
        borderRadius: 30,
      })}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
    >
      <img src={imgSrc} className="inset-0 w-full h-full object-cover" />
      <div
        className="absolute left-1/2 -translate-x-[50%]"
        style={scaledStyle(scale, {
          top: 32,
        })}
      >
        {children}
      </div>
      <button
        onClick={handleClick}
        className="absolute"
        style={scaledStyle(scale, {
          bottom: 15,
          right: 16,
          height: 59,
          width: 59,
        })}
      >
        <img src={guideButton} alt="Button" className="w-full h-full" />
      </button>
    </div>
  );
};

export default GuideCard;
