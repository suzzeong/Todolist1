import React from 'react';
import './style.css';

const Todo = ({ todo, handleDelete, handleDone }) => {
  console.log(todo);
  return (
    <div className='todos_container'>
      <div className='todo' id='todo.id'>
        <p className='todo_title'>{todo.title}</p>
        <p className='todo_content'>{todo.content}</p>
        <div className='buttons'>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
          <button onClick={() => handleDone(todo.id)}>
            {todo.isDone === true ? 'Cancel' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
