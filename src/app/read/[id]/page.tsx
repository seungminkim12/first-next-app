type OwnProps = {
  params: {
    id: number;
  };
};

export default function Read(props: OwnProps) {
  return (
    <>
      <h2>Read</h2>
      parameters : {props.params.id}
    </>
  );
}
