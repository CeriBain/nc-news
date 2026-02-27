import { useState, useEffect } from "react";
import { getArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router";
import { useParams, useSearchParams } from "react-router-dom";
import Sorting from "./Sorting";

function ArticleList() {
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams(); // stores in URL not memory
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const sortBy = searchParams.get("sort-by") || "created-at";
  const order = searchParams.get("order") || "desc";

  function setSortBy(newSortBy) {
    setSearchParams({ sort_by: newSortBy, order });
  }
  function setOrder(newOrder) {
    setSearchParams({ sort_by: sortBy, order: newOrder });
  }

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
  }, [topic, sortBy, order]);

  return (
    <div className="article-list">
      <h2>{topic ? topic : "All"} Articles </h2>
      <Sorting
        sortBy={sortBy}
        order={order}
        setSortBy={setSortBy}
        setOrder={setOrder}
      />
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
