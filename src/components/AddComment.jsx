import { useState } from "react";
import { postComment } from "../api";

function AddComment() {
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const user = "hardcodeusername";

  function submitComment(e) {
    setError(null);
    setSubmitting(true);
    postComment(article_id, user, body)
      .then((newComment) => {
        postComment((current) => [newComment, ...current]);
        setBody("");
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
