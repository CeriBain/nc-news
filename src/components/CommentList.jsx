import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../api";
import ArticleCard from "./ArticleCard";

function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId()
      .then((commentsData) => {
        setComments(commentsData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("oh no something is off here...");
        setCommentList(false);
      });
  }, [article_id]);

  if (comments.length === 0) return <p> No comments yet </p>;

  return (
    <main className="comments-section">
      <h3> Comments ({comments.length}) </h3>
      <ul className="coments-list">
        {" "}
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <CommentCard comment={comment} />
          </li>
        ))}
      </ul>
    </main>
  );
}
export default CommentList;
