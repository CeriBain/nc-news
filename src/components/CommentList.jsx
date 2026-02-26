import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../api";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then((commentsData) => {
        setComments(commentsData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("oh no something is off here...");
        setComments([]);
      });
  }, [article_id]);

  return (
    <main className="comments-section">
      <AddComment article_id={article_id} setComments={setComments} />
      {comments.length === 0 ? (
        <p> No comments yet </p>
      ) : (
        <ul className="comments-list">
          {comments.map((comment) => (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
export default CommentList;
