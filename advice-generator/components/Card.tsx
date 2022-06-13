import { ReactNode } from "react";

interface ICard {
  header: ReactNode;
  text: string;
  patternDivider: ReactNode;
}

export default function Card(props: ICard) {
  return (
    <>
      <div>{props.header}</div>
      <p>
        {' " '}
        {props.text}
        {' " '}
      </p>
      <p>{props.patternDivider}</p>
    </>
  );
}
