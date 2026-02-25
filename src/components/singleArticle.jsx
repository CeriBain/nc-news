import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";
import CommentList from "./CommentList";

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getArticleById(article_id)
      .then((articlesData) => {
        setArticle(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("oh no something is off...");
        setIsLoading(false);
      });
  }, [article_id]);

  //const date = new Date(article.created_at).toString("en-GB", {});
  console.log(article);
  if (isLoading === false) {
    return (
      <main className="single-article">
        <span>{article.topic}</span>
        <h2 className="single-article-title">{article.title}</h2>
        <p className="single-article-meta">
          by {article.author}
          {article.created_at}
        </p>
        <img
          className="single-article-img"
          src={article.article_img_url}
          alt={article.title}
        />
        <p className="single-article-body">{article.body}</p>
        <div className="single-article-stats">
          <span> Thumb {article.votes}</span>
          <span> comment {article.comment_count}</span>
        </div>
        <CommentList article_id={article_id} />
      </main>
    );
  }
}

export default SingleArticle;
