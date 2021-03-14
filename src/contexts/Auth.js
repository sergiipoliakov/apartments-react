import React, { Component, createContext } from 'react';
import userAPI from '../servises/user-api';

const Context = createContext();

// const user = {
//   name: 'Mango',
//   email: 'mango@mail.com',
//   avatar:
//     'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
// };

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
