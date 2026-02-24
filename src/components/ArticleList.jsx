import { useState, useEffect } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "../components/ArticleCard";

function articlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then(articleBody);
    setArticles(articleBody);
    setIsLoading(false);
  }).catch((error) => {
    setError("oh no, something is off...", error);
  });

  return (
    <main className="artcile-list">
      <h2> All Articles </h2>
      <ul className="article-grid">
        {articles.map((article) => (
          <li key={article.article.id}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </main>
  );
}
export default articlesList;
