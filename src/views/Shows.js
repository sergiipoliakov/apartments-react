import { Component } from 'react';
import { Link } from 'react-router-dom';
import getQueryParams from '../utils/getQueryParams';
import SearchBox from '../components/SearchBox';

import tvAPI from '../servises/tv-api';
export default class Shows extends Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);

    if (query) {
      this.fetchShows(query);
      //   return;
    }
    // this.fetchShows('batman');
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchShows(nextQuery);
    }
  }

  fetchShows = query => {
    tvAPI.fetchShowWithQuery(query).then(shows => this.setState({ shows }));
  };

  handleChangeQuery = query => {
    console.log(query);
    this.props.history.push({
      //   pathname: this.props.location.pathname,
      ...this.props.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { shows } = this.state;
    const { match } = this.props;
    return (
      <>
        <SearchBox onSubmit={this.handleChangeQuery} />
        {shows.length > 0 && (
          <ul>
            {shows.map(show => (
              <li key={show.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${show.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {show.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}
