import type { ProcessCardItem } from "@/types/card";
import { ReactComponent as Image01 } from "@/assets/images/process-image/process_image_1.svg";
import { ReactComponent as Image02 } from "@/assets/images/process-image/process_image_2.svg";
import { ReactComponent as Image03 } from "@/assets/images/process-image/process_image_3.svg";
import { ReactComponent as Image04 } from "@/assets/images/process-image/process_image_4.svg";
import { ReactComponent as Image05 } from "@/assets/images/process-image/process_image_5.svg";

export const PROCESS_CARDS: ProcessCardItem[] = [
  {
    id: 1,
    title: "탐조 시간대 알아두기",
    Icon: Image01,
    iconLocation: "left",
    description:
      "새들은 이른 아침과 해질녘에 가장 활발하게 움직여요.\n이 시간대에 나가면 더 많은 새를 만날 수 있어요.",
    startPoint: "bottom",
    marginValue: 0,
    gapValue: 61,
    marginBottom: 192,
  },
  {
    id: 2,
    title: "관찰은 눈에서 쌍안경 순서로",
    Icon: Image02,
    iconLocation: "right",
    description:
      "먼저 눈으로 새의 위치를 확인하고, 그 다음 쌍안겨응로 자세히 보세요.\n8배율에서 10배율의 쌍안경이 초보자에게 가장 좋아요.",

    startPoint: "top",
    marginValue: -42,
    gapValue: 70,
    marginBottom: 0,
  },
  {
    id: 3,
    title: "가까운 곳부터 시작하기",
    Icon: Image03,
    iconLocation: "left",
    description:
      "멀리 가지 않아도 괜찮아요.\n동네 공원이나 하천 근처에서도 다양한 새를 만날 수 있어요.\n새록 앱의 탐조 지도를 통해 지금 내 주변에서 발견된 새를 바로 찾아볼 수도 있어요!",
    startPoint: "bottom",
    marginValue: 7,
    gapValue: 41,
    marginBottom: 150,
  },
  {
    id: 4,
    title: "소리에 귀 기울이기",
    Icon: Image04,
    iconLocation: "right",
    description:
      "탐조는 눈뿐만 아니라 귀로도 하는 활동이에요.\n새의 울음소리를 듣고, 어떤 새인지 맞혀보는 재미를 느껴보세요.",

    startPoint: "bottom",
    marginValue: 0,
    gapValue: 54,
    marginBottom: 192,
  },
  {
    id: 5,
    title: "기록 남기기",
    Icon: Image05,
    iconLocation: "left",
    description:
      "색깔, 행동, 크기 등 새의 특징을 노트에 적거나 사진으로 남기면 좋아요.\n새록 앱을 이용하면 간편하게 탐조 일지를 작성하고, 다른 탐조자와 공유할 수도 있어요.",
    startPoint: "bottom",
    marginValue: 48,
    gapValue: 60,
    marginBottom: 0,
  },
];
