# NC News: Front-End

A React-based news app where users can browse articles by topic, vote on content, and join the discussion through comments. 

## Live Demo

🔗 [Hosted version](https://<your-hosted-url>.netlify.app)   (update this!!!)

## Built With

- **React** - UI library
- **Vite** - build tool & dev server
- **Axios** - HTTP client                   (Have I used this???)
- **React Router** — client-side routing
- **CSS** - custom styling

## Features

- View a list of articles with sorting and topic filtering
- Read individual articles with full comment threads
- Post and delete comments
- Upvote and downvote articles
- Responsive, accessible layout

## Getting Started

### Prerequisites

- Node.js (v18+)

### Installation

1. Clone the repo:

```bash
git clone https://github.com/<your-username>/nc-news.git
cd nc-news
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── components/
│   ├── AddComment.jsx
│   ├── ArticleCard.jsx
│   ├── ArticleList.jsx
│   ├── ArticleVotes.jsx
│   ├── CommentCard.jsx
│   ├── CommentList.jsx
│   ├── Header.jsx
│   ├── Nav.jsx
│   ├── SingleArticle.jsx
│   └── Sorting.jsx
├── api.js            # API request functions
├── App.jsx           # Root component & routes
├── App.css
├── index.css
└── main.jsx          # Entry point
```

## Back-End Repo

This project consumes the [Northcoders News API](https://github.com/<your-username>/nc-news-api), a RESTful API built with Express and PostgreSQL.

---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com).
