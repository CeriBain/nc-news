import { useState } from "react";
import { postComment } from "../api";

function AddComment({ article_id, setComments }) {
  // setComments updates CommentLists state by it being a passed down function as prop
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const user = "tickle122";

  function submitComment(e) {
    e.preventDefault();
    //stops page refreshing
    setError(null);
    setSubmitting(true);
    postComment(article_id, user, body)
      .then((newComment) => {
        setComments((current) => [newComment, ...current]);
        // adds to top of my comment array, spreading the rest out
        setBody("");
        //clears text area by resetting state
        setSubmitting(false);
      })
      .catch((err) => {
        setError("Oh no, failed to post comment! Please try again");
        setSubmitting(false);
      });
  }

  return (
    <form className="add-comment" onSubmit={submitComment}>
      <h3> Add a comment </h3>
      <textarea
        id="comment-body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write your comment here..."
        disabled={submitting}
      />
      <button type="submit">{submitting ? "Posting" : "Post comment"}</button>
    </form>
  );
}
export default AddComment;
