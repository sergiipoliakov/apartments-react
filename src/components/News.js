import axios from 'axios';
import { useState, useEffect } from 'react';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    setLoading(true);
    axios
      .get('https://hn.algolia.com/api/v1/search?query=react', {
        cancelToken: source.token,
      })
      .then(({ data }) => setArticles(data.hits))
      .catch(error => {
        if (axios.isCancel(error)) {
          console.log('Request canceled');
        } else {
          setError(error);
        }
      })
      .finally(() => setLoading(false));

    return () => {
      console.log('unmounting');
      source.cancel();
    };
  }, []);

  return (
    <ul>
      {!loading ? (
        articles.map(({ objectID, title, url }) => (
          <li key={objectID}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))
      ) : (
        <h2>загружаю...</h2>
      )}
      {}
    </ul>
  );
}

// TODO: сменить раут пока не пришел http-ответ чтобы была утечка памяти

// export default class News extends Component {
//   state = {
//     articles: [],
//   };

// componentDidMount() {
//   axios
//     .get('https://hn.algolia.com/api/v1/search?query=react')
//     .then(({ data }) => this.setState({ articles: data.hits }))
//     .catch(error => {
//       console.log(error);
//     });
// }

//   render() {
//     return (
//       <ul>
//         {this.state.articles.map(({ objectID, title, url }) => (
//           <li key={objectID}>
//             <a href={url} target="_blank" rel="noopener noreferrer">
//               {title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
