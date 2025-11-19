import { useState } from "react";
import type { CSSProperties } from "react";
import EtiquetteCard from "../components/EtiquetteCard";
import EtiquetteDescription from "../components/EtiquetteDescription";
import { scaledStyle } from "@/utils/scaleStyle";
import { ETIQUETTE_CARDS } from "@/constants/etiquetteCards";
import CardConnector from "../components/CardConnector";

interface EtiquetteCardsProps {
  scale?: number;
}

// 기준 크기 (활성 카드 크기)
const CARD_WIDTH = 243;
const CARD_HEIGHT = 274;

// 비활성 카드 목표 크기
const INACTIVE_WIDTH = 205;
const INACTIVE_HEIGHT = 246;

// 스케일 비율
const SCALE_X = INACTIVE_WIDTH / CARD_WIDTH; // ≈ 0.84
const SCALE_Y = INACTIVE_HEIGHT / CARD_HEIGHT; // ≈ 0.90

const EtiquetteCards = ({ scale = 1 }: EtiquetteCardsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = ETIQUETTE_CARDS.length - 1;

  return (
    <div
      className="flex flex-col"
      style={scaledStyle(scale, { width: 1220, gap: -1 })}
    >
      <div className="w-full flex items-start justify-between">
        {ETIQUETTE_CARDS.map((card, index) => {
          const isActive = index === activeIndex;
          const isLeftOfActive = index < activeIndex;
          const isRightOfActive = index > activeIndex;

          // 활성/비활성에 따라 origin 결정
          const originClass = isActive
            ? "origin-center"
            : isLeftOfActive
            ? "origin-top-left"
            : "origin-top-right";

          // 활성/비활성에 따른 transform & opacity
          const innerStyle: CSSProperties = isActive
            ? {
                transform: "scaleX(1) scaleY(1)",
                opacity: 1,
              }
            : {
                transform: `scaleX(${SCALE_X}) scaleY(${SCALE_Y})`,
                opacity: 0.7,
              };

          return (
            <div
              key={card.id}
              className="relative"
              style={scaledStyle(scale, {
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
              })}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div
                className={`
                  ${originClass}
                  w-full h-full
                  transition-transform
                  duration-100
                `}
                style={innerStyle}
              >
                <EtiquetteCard
                  scale={scale}
                  Icon={card.Icon}
                  title={card.title}
                  isActive={isActive}
                />
                {isActive && (
                  <>
                    {/* 왼쪽 커넥터 */}
                    {activeIndex === 0 ? (
                      // 첫 번째 카드 왼쪽
                      <CardConnector scale={scale} variant="first-left" />
                    ) : (
                      // 중간/마지막 카드 왼쪽
                      <CardConnector scale={scale} variant="left" />
                    )}

                    {/* 오른쪽 커넥터 */}
                    {activeIndex === lastIndex ? (
                      // 마지막 카드 오른쪽
                      <CardConnector scale={scale} variant="last-right" />
                    ) : (
                      // 첫/중간 카드 오른쪽
                      <CardConnector scale={scale} variant="right" />
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <EtiquetteDescription
        scale={scale}
        descriptionTop={ETIQUETTE_CARDS[activeIndex].descriptionTop}
        descriptionBottom={ETIQUETTE_CARDS[activeIndex].descriptionBottom}
        isFirst={activeIndex === 0}
        isLast={activeIndex === lastIndex}
      />
    </div>
  );
};

export default EtiquetteCards;
