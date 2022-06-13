import { ReactNode } from "react";

interface ICard {
  header: ReactNode;
  text: string;
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
      <p>{"________ | | ________"}</p>
    </>
  );
}
