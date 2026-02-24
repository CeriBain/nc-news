const baseProjectUrl = " https://back-end-nc-news-imbm.onrender.com/api/";

function getArticles(topics, sort_by, order) {
  const params = new URLSearchParams();
  if (topics) params.append("topics", topics);
  if (sort_by) params.append("sort_by", sort_by);
  if (order) params.append("order", order);
  return fetch(`${baseProjectUrl}/articles?${params}`)
    .then((res) => {
      return res.json();
    })
    .then(({ articles }) => articles);
}
function getTopics() {
    return fetch
}
