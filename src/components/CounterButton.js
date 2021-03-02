import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../redux/counterButton';

const CounterButton = ({ clicks, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      кликнули {clicks} раз
    </button>
  );
};

const mapStateToProps = state => ({
  clicks: state.counterButton.value,
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(increment()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton);
