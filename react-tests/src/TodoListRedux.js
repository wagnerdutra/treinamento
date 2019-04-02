import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodosActions } from "./store/ducks/todos";

export class TodoList extends Component {
  state = {
    newTodo: ""
  };

  handleInputChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.newTodo);
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          name="todo"
          onChange={this.handleInputChange}
          value={this.props.newTodo}
        />
        <button onClick={this.handleAddTodo}>Adicionar Todo</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
