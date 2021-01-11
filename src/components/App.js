import React, { Component } from 'react';

import Spinner from './Spinner';
import Notification from './Notification';
import ArticleList from './ArticleList';
import SearchForm from './SearchForm';

import articlesApi from '../servises/articlesApi';

export default class App extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
    searchQuery: '',
    page: 0,
  };

  componentDidMount() {
    // this.setState({
    //   loading: true,
    // });
  }
  fetchArticles = query => {
    articlesApi
      .fetchArticlesWithQuery(query)
      .then(articles =>
        this.setState(prevState => ({ articles, page: prevState.page + 1 })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({
      searchQuery: query,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;

    if (prevQuery !== nextQuery) {
      this.fetchArticles();
    }
  }

  render() {
    const { articles, loading, error } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.handleSearchFormSubmit} />
        {error && (
          <Notification
            message={`Whoops, something went wrong:${error.message}`}
          />
        )}
        {loading && <Spinner message="Loading..." />}
        {articles.length > 0 && <ArticleList articles={articles} />}
        {articles.length > 0 && (
          <button type="button" onClick={this.fetchArticles}>
            Load more
          </button>
        )}
      </>
    );
  }
}
