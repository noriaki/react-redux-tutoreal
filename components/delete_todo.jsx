import React from 'react';

const DeleteTodo = ({ onClick }) => {
  return(
    <button type="button" onClick={onClick}>&times;</button>
  );
};

export default DeleteTodo;
