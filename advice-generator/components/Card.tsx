interface ICard {
  header: string;
  text: string;
}

export default function Card(props: ICard) {
  return (
    <>
      <p style={{ color: "var(--neon-green)" }}>{props.header}</p>
      <p>{props.text}</p>
    </>
  );
}
