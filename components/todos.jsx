import React from 'react';
import { connect } from 'react-redux';

import NewTodo from './new_todo';
import DeleteTodo from './delete_todo';
import { addTodo, deleteTodo } from '../actions';

const Todos = ({ todos, dispatch }) => {
  return(
    <div>
      <h1>Todos</h1>
      <NewTodo onChange={(e) => {
          if(e.keyCode === 13) {
            dispatch(addTodo(e.target.value));
            e.target.value = '';
          }
        }} />
        { todos.map((todo, index) => {
          return(<p key={todo}>{todo}
                 <DeleteTodo onClick={() => {
                     dispatch(deleteTodo(index));
                     }} /></p>);
        }) }
    </div>
  );
};

function mapStateToProps(todos) {
  return { todos };
}

export default connect(mapStateToProps)(Todos);
