//for preventing scroll trigger on wheel event for numbers inputs
import { WheelEvent } from "react";

export const preventScrollTrigger = (e: WheelEvent<HTMLElement>) => {
  if (document.activeElement === e.currentTarget) {
    e.currentTarget.blur();
  }
};
