import "./tipWindow.css";

export interface TipWindowProps {
  tipText: string;
}

export const TipWindow = ({ tipText }: TipWindowProps) => {
  return <div className="tipContent">{tipText}</div>;
};
