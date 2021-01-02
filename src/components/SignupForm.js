import React, { Component } from 'react';

const Subscription = {
  FREE: 'free',
  PRO: 'pro',
  PREMIUM: '',
};

export default class SignupForm extends Component {
  state = {
    email: '',
    password: '',
    agreed: false,
    subscription: '',
    age: '',
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleAgreedChahge = e => {
    this.setState({ agreed: e.target.checked });
  };
  handleSubscriptionChenge = e => {
    const { name, value } = e.target;
    this.setState({
      subscription: value,
    });
  };
  handleAgeChange = e => {
    this.setState({
      age: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  render() {
    const { email, password, agreed, subscription, age } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={this.handleChange}
            name="email"
          />
        </label>
        <br />
        <label>
          password
          <input
            type="password"
            value={password}
            onChange={this.handleChange}
            name="password"
          />
        </label>
        <br />
        <div role="group">
          <label>
            <input
              type="radio"
              value={Subscription.FREE}
              checked={Subscription.FREE === subscription}
              onChange={this.handleSubscriptionChenge}
            />
            Free
          </label>
          <label>
            <input
              type="radio"
              value={Subscription.PRO}
              checked={Subscription.PRO === subscription}
              onChange={this.handleSubscriptionChenge}
            />
            Pro
          </label>
          <label>
            <input
              type="radio"
              value={Subscription.PREMIUM}
              checked={Subscription.PREMIUM === subscription}
              onChange={this.handleSubscriptionChenge}
            />
            Premium
          </label>
        </div>
        <label>
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleAgreedChahge}
          />
          Соглашаюсь!
        </label>
        <br />
        <label>
          Choose your age
          <select name="age" value={age} onChange={this.handleAgeChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <br />

        <button type="submit" disabled={!agreed}>
          Зарегистрироваться как {email}
        </button>
      </form>
    );
  }
}
