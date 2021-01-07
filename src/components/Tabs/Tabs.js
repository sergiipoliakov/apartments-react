import React, { Component } from 'react';

export default class Tabs extends Component {
  state = {
    activeIdx: 1,
  };
  setActivTabIdx = idx => {
    this.setState({
      activeIdx: idx,
    });
  };

  render() {
    const tab = this.props.items[this.state.activeIdx];

    console.log(`Re-render @${Date.now()}`);
    return (
      <div>
        <div>
          {this.props.items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActivTabIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <h2>{tab.label}</h2>
          <p>{tab.content}</p>
        </div>
      </div>
    );
  }
}
