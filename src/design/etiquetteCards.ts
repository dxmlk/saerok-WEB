import type { CardItem } from "@/types/card";
import { ReactComponent as ShhhIcon } from "@/assets/images/etiquette-emoji/etiquette_emoji_1.svg";
import { ReactComponent as NestIcon } from "@/assets/images/etiquette-emoji/etiquette_emoji_2.svg";
import { ReactComponent as LeafIcon } from "@/assets/images/etiquette-emoji/etiquette_emoji_3.svg";
import { ReactComponent as FoodIcon } from "@/assets/images/etiquette-emoji/etiquette_emoji_4.svg";
import { ReactComponent as HeartIcon } from "@/assets/images/etiquette-emoji/etiquette_emoji_5.svg";
export const ETIQUETTE_CARDS: CardItem[] = [
  {
    id: 1,
    title: "조용히 관찰하기",
    Icon: ShhhIcon,
    descriptionTop:
      "새들은 소리에 아주 민감해요. 큰 소리로 대화하거나 갑자기 움직이지 말고, 천천히 조용히 다가가세요.",
    descriptionBottom: "새와는 30m 이상 거리를 두면 좋아요.",
  },
  {
    id: 2,
    title: "둥지를 건드리지 않기",
    Icon: NestIcon,
    descriptionTop:
      "둥지 주변에 오래 머물거나 가지를 꺾으면, 새가 둥지를 버릴 수도 있어요.",
    descriptionBottom: "둥지 주변은 항상 멀리서 조용히 관찰해 주세요.",
  },
  {
    id: 3,
    title: "자연훼손 하지 않기",
    Icon: LeafIcon,
    descriptionTop: "지정된 탐방로를 이용하고, 식물이나 돌을 훼손하지 않아요.",
    descriptionBottom:
      "쓰레기는 반드시 되가져로고, 향수나 담배 냄새도 피하는게 좋아요.",
  },
  {
    id: 4,
    title: "먹이 주지 않기",
    Icon: FoodIcon,
    descriptionTop:
      "먹이를 주면 새의 자연스러운 먹이 활동이 깨지고, 병이나 생태계 교란을 일으킬 수 있어요.",
    descriptionBottom:
      "탐조가 익숙해진 후 ‘버드피딩'을 공부하며 천천히 시도해 보세요.",
  },
  {
    id: 5,
    title: "다른 탐조자 배려하기",
    Icon: HeartIcon,
    descriptionTop:
      "함께 탐조하는 사람들의 시야를 가리지 않고, 서로의 관찰시간을 존중해주세요.",
    descriptionBottom: "새와는 30m 이상 거리를 두면 좋아요.",
  },
];
