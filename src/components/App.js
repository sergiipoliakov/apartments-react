import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  state = {
    articles: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
    axios
      .get(
        ' https://api.binance.com/api/v3/?symbol=LTCBTC&side=BUY&type=LIMIT&timeInForce=GTC&quantity=1&price=0.1&recvWindow=5000&timestamp=1499827319559',
      )
      .then(response => {
        console.dir(response);
        this.setState({
          articles: response.data,
          loading: false,
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          {/* {
            <ul>
              {this.state.articles.map(article => (
                <li>{article}</li>
              ))}
            </ul>
          } */}
        </div>
        {/* {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <ul>
            {this.state.articles.map(article => (
              <li key={article.objectID}>
                <a href={article.url}>{article.title}</a>
              </li>
            ))}
          </ul>
        )} */}
      </div>
    );
  }
}
