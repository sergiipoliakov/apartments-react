import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
  componentDidMount() {
    console.log('modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className="Backdrop">
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}
