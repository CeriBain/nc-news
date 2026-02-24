import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Article not found.");
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) return <p>Loading article...</p>;
  if (error) return <p>{error}</p>;

  const date = new Date(article.created_at).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <main className="single-article">
      <span className="single-article__topic">{article.topic}</span>
      <h2 className="single-article__title">{article.title}</h2>
      <p className="single-article__meta">
        by {article.author} • {date}
      </p>
      <img
        className="single-article__img"
        src={article.article_img_url}
        alt={article.title}
      />
      <p className="single-article__body">{article.body}</p>
      <div className="single-article__stats">
        <span> Thumb {article.votes}</span>
        <span> comment {article.comment_count}</span>
      </div>
    </main>
  );
}

export default SingleArticle;
