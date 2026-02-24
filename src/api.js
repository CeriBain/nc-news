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
