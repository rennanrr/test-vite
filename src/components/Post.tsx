export type PostProps = {
  title: string;
  comment: string;
};

export function Post(props: PostProps) {
  return (
    <div>
      <h3>{props.title}</h3>
      <label>{props.comment}</label>
    </div>
  );
}
