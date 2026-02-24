import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ArticleList />}>
              <Route path="/articles" element={<ArticleList />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
