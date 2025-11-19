export type SvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

export interface CardItem {
  id: number;
  title: string;
  Icon: SvgIcon;
  descriptionTop: string;
  descriptionBottom: string;
}

export interface ProcessCardItem {
  id: number;
  title: string;
  Icon: SvgIcon;
  iconLocation: string;
  description: string;
  startPoint: string;
  marginValue: number;
  gapValue: number;
  marginBottom: number;
}
