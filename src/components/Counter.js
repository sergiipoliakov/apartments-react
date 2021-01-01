import React, { Component } from 'react';
import CounterControls from './CounterControls';

export default class Counter extends Component {
  static propTypes = {};

  static defaultProps = {
    initialValue: 0,
    step: 1,
  };

  state = {
    value: this.props.initialValue,
  };

  handelIncrement = () => {
    this.setState((prevState, props) => {
      return {
        value: prevState.value + props.step,
      };
    });
  };

  handelDecrement = () => {
    this.setState((prevState, props) => {
      return {
        value: prevState.value - props.step,
      };
    });
  };

  render() {
    return (
      <div>
        <CounterControls
          onIncrement={this.handelIncrement}
          onDecrement={this.handelDecrement}
        />
        <span>{this.state.value}</span>
      </div>
    );
  }
}
