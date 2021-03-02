import React, { Component } from 'react';
import { connect } from 'react-redux';

import shortid from 'shortid';
import IconButton from '../components/IconButton';
import Container from '../components/Container';
import Filter from '../components/Todos/TodoFilter';
import Stats from '../components/Todos/Stats';
import TodoEditor from '../components/Todos';
import TodoModal from '../components/Modal/Modal';
import TodoList from '../components/Todos/TodoList';
import { ReactComponent as AddIcon } from '../icons/add.svg';
import { todosSelectors, todosOperations } from '../redux/todos';
import CounterButton from '../components/CounterButton';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

class TodosViews extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        <div style={barStyles}>
          <Filter />
          <Stats />
          <IconButton onClick={this.toggleModal} aria-label="Добавить todo">
            <AddIcon width="40" height="40" fill="#fff" />
          </IconButton>

          {showModal && (
            <TodoModal closeModal={this.toggleModal}>
              <TodoEditor onSave={this.toggleModal} />
            </TodoModal>
          )}
          {this.props.isLoadingTodos && <h1>Загружаем...</h1>}
          <CounterButton />
        </div>

        <TodoList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingTodos: todosSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(todosOperations.fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosViews);
