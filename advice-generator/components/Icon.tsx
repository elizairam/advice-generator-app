import { MouseEventHandler, ReactNode } from "react";

interface Iicon {
  click?: MouseEventHandler<HTMLDivElement>;
  icon: ReactNode;
}

export default function Icon(props: Iicon) {
  return <div onClick={props.click}>{props.icon}</div>;
}
