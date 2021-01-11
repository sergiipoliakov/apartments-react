import React from 'react';

export default function ArticleList({ articles }) {
  return (
    <div>
      <ul>
        {articles.map(article => (
          <li key={article.objectID}>
            <a href={article.url}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
