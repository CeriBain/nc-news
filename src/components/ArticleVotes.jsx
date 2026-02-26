import { useState } from "react";
import { patchArticleVotes } from "../api";

function Voting({ article_id, votes }) {
  const [voteChanges, setVoteChanges] = useState(0);
  const [error, setError] = useState(null);

  function changeVote(inc_votes) {
    setVoteChanges((currentVote) => currentVote + inc_votes);
    setError(null);
    patchArticleVotes(article_id, inc_votes).catch((err) => {
      setVoteIncrement((currentVote) => currentVote - inc_votes);
      setError("failed, try again");
    });
  }
  return (
    <div className="increment-vote">
      <button onClick={() => changeVote(1)}>Thumb-up</button>
      <span className="decrement-count"> {votes + voteChanges} </span>
      <button onClick={() => changeVote(-1)}>Thumb-down</button>
    </div>
  );
}
export default Voting;
