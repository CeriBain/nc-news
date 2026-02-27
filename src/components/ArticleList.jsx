import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router";
import { useParams } from "react-router-dom";

function ArticleList() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic)
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("oh no something is off...");
        setIsLoading(false);
      });
  }, [topic]);

  return (
    <div className="article-list">
      <h2>{topic ? topic : "All"} Articles </h2>
      <ul className="article-grid">
        {articles.map((article) => (
          <li key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <ArticleCard article={article} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
