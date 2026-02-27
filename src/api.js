const baseProjectUrl = "https://back-end-nc-news-imbm.onrender.com/api";

export function getArticles(topic, sort_by, order) {
  const params = new URLSearchParams();

  if (topic) params.append("topic", topic);
  if (sort_by) params.append("sort_by", sort_by);
  if (order) params.append("order", order);

  return fetch(`${baseProjectUrl}/articles?${params}`)
    .then((res) => {
      return res.json();
    })
    .then(({ articles }) => articles);
}
export function getTopics() {
  return fetch(`${baseProjectUrl}/topics`)
    .then((res) => {
      return res.json();
    })
    .then(({ topics }) => topics);
}
export function getArticleById(article_id) {
  return fetch(`${baseProjectUrl}/articles/${article_id}`)
    .then((res) => {
      return res.json();
    })
    .then(({ article }) => article);
}
export function getCommentsByArticleId(article_id) {
  return fetch(`${baseProjectUrl}/articles/${article_id}/comments`)
    .then((res) => {
      return res.json();
    })
    .then(({ comments }) => comments);
}

export function postComment(article_id, username, body) {
  return fetch(`${baseProjectUrl}/articles/${article_id}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, body }),
  })
    .then((res) => {
      return res.json();
    })
    .then(({ comment }) => comment);
}
export function patchArticleVotes(article_id, inc_votes) {
  return fetch(`${baseProjectUrl}/articles/${article_id}`, {
    method: "PATCH", // updating
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ inc_votes }), // converts inc_votes from an object to a string
  })
    .then((res) => {
      return res.json();
    })
    .then(({ article }) => article);
}
export function deleteComment(comment_id) {
  return fetch(`${baseProjectUrl}/comments/${comment_id}`, {
    method: "DELETE",
  });
}
