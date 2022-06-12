interface IHeader {
  headerText: string;
  idText?: string | number;
}

export default function Header(props: IHeader) {
  return (
    <>
      <p>
        {props.headerText} {"#"} {props.idText}
      </p>
    </>
  );
}
