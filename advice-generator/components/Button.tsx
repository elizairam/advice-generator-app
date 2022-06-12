import { MouseEventHandler } from "react";

interface IButton {
  click: MouseEventHandler<HTMLButtonElement>;
  icon: any;
}

export default function Button(props: IButton) {
  return <button onClick={props.click}>{props.icon}</button>;
}
