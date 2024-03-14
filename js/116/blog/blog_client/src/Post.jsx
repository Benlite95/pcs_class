export default function Post(props) {
  const {title, body, author, date} = props.post;

  return (
    <div className="post">
      <h2>{ title }</h2>
      <h3>by { author } on { new Date(date).toLocaleString() }</h3>
      <article>{ body }</article>
    </div>
  )
}
