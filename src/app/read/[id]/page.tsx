import { Topic } from "@/app/model/model";

type OwnProps = {
  params: Topic;
};

export default async function Read(props: OwnProps) {
  const res = await fetch(`http://localhost:9999/topics/${props.params.id}`, {
    cache: "no-cache",
  });
  const topic = await res.json();
  return (
    <>
      <h2>{topic.title}</h2>
      {topic.body}
    </>
  );
}
