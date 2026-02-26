import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/singleArticle";

function App() {
  return (
    <BrowserRouter> different views without full page reloads/
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
