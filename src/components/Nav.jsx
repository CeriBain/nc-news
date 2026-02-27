import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";

function Nav() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicResponse) => {
      setTopics(topicResponse);
    });
  }, []);
  return (
    <nav className="topics-navbar">
      <Link to="/"> All topics </Link>
      {topics.map((topic) => (
        <Link key={topic.slug} to={`/topics/${topic.slug}`}>
          {topic.slug}
        </Link>
      ))}
    </nav>
  );
}
export default Nav;
