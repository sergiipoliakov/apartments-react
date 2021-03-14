import React, { Component, createContext } from 'react';
import userAPI from '../servises/user-api';

const Context = createContext();

export default class AuthContext extends Component {
  static Consumer = Context.Consumer;

  login = () => {
    userAPI.fetchUser().then(user => this.setState({ user }));
  };

  logOut = () => {
    this.setState({
      user: null,
    });
  };

  state = {
    user: null,
    onLogIn: this.login,
    onLogOut: this.logOut,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
