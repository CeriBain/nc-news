function CommentCard({ comment }) {
  const date = new Date(comment.created_at).toString("Date");

  return (
    <article className="comment-card">
      <div className="comment-card">
        <span className="comment-card-author">{comment.author}</span>
        <span className="comment-crad-date">{date} </span>
      </div>
      <span className="comment-card-body">{comment.body} </span>
      <span className="comment-card-votes"> {comment.votes} </span>
    </article>
  );
}
export default CommentCard;
