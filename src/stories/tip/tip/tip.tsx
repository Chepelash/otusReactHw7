import { useRef, useState, type ReactNode, type RefObject } from "react";
import { TipWindow } from "../tipWindow/tipWindow";
import "./tip.css";
import classNames from "classnames";

export interface TipProps {
  children: ReactNode;
  tipText: string;
}

type TipState = {
  visible: boolean;
  mount: boolean;
};

export const Tip = ({ children, tipText }: TipProps) => {
  const [state, setState] = useState<TipState>({
    mount: false,
    visible: false,
  });
  const timerId = useRef<null | number>(null);

  function resetTimer(timerId: RefObject<null | number>) {
    if (typeof timerId.current === "number") {
      clearTimeout(timerId.current);
    }
  }

  function showTip() {
    resetTimer(timerId);
    timerId.current = setTimeout(() => {
      setState({ mount: true, visible: true });
    }, 1000);
  }

  function hideTip() {
    resetTimer(timerId);
    setState((prev) => {
      return { ...prev, visible: false };
    });
    timerId.current = setTimeout(() => {
      setState((prev) => {
        return { ...prev, mount: false };
      });
    }, 1000);
  }

  return (
    <div className="tipElement" onMouseEnter={showTip} onMouseLeave={hideTip}>
      {state.mount && (
        <div
          className={classNames(
            "tipWindow",
            { tipContentAppear: state.visible },
            { tipContentDisappear: !state.visible },
          )}
        >
          <TipWindow tipText={tipText} />
        </div>
      )}
      {children}
    </div>
  );
};
