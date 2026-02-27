import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

function Nav() {
  const [getTopics, setGetTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicResponse) => {
      setGetTopics(topicResponse);
    });
  }, []);
  return (
    <nav className="topics-navbar">
      <Link to="/"> All topics </Link>
      {topics.map(() => {
        <link key={topic.slug} to={`/topics/${topic.slug}`}>
          {topic.slug}
        </link>;
      })}
    </nav>
  );
}
export default Nav;
