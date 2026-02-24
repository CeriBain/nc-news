import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  const date = new Date(article.created_at).toString("Date");

  return (
    <article className="article-card">
      <img
        className="article-card-img"
        src={article.article_img_url}
        alt={article.title}
      />
      <div className="article-card-body">
        <span className="article-card-topic">{article.topic}</span>
        <Link to={`/articles/${article.article_id}`}>
          <h3 className="article-card-title">{article.title}</h3>
        </Link>
        <p className="article-card-author">
          by {article.author}
          {date}
        </p>
        <div className="article-card-vote-comment">
          <span> Thumb {article.votes}</span>
          <span> Comment {article.comment_count}</span>
        </div>
      </div>
    </article>
  );
}
export default ArticleCard;
