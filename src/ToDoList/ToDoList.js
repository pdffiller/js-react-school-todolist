import React from 'react';
import { connect } from 'react-redux';
import ToDoItem from './ToDoItem';
import {
  toggleTodo,
  setFilter,
  getVisibleTodos as getTodos,
  getFilterValue,
} from './store';

const ToDoList = ({ todos, onTodoClick, filter, onFilterChange }) => (
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <select className="form-control" value={filter} onChange={onFilterChange}>
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="not-completed">not completed</option>
        </select>
      </div>
    </div>
    <hr/>
    <div className="row">
      <div className="col-md-12">
        <ul className="list-group">
          {todos.map && todos.map(
            todo => (
              <ToDoItem
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
              />
            )
          )}
        </ul>
      </div>
    </div>
  </div>
);

const state2Props = state => ({
  todos: getTodos(state),
  filter: getFilterValue(state),
});

const handlers = {
  onTodoClick: id => toggleTodo(id),
  onFilterChange: ({ target }) => setFilter(target.value),
}

export default connect(state2Props, handlers)(ToDoList);