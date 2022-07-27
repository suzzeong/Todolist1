// import React, { useState } from 'react';
import Todo from '../todo/Todo';
import './style.css';

const List = ({ todos, handleDelete, handleDone }) => {
  console.log(todos);

  return (
    <div className='list_container'>
      <h2 className='list_title'>Working!</h2>
      <div className='working'>
        {todos.map((todo) =>
          todo.isDone === false ? (
            <div>
              <Todo
                todo={todo}
                key={todo.id}
                handleDelete={handleDelete}
                handleDone={handleDone}
              />
            </div>
          ) : null
        )}
      </div>
      <h2 className='list_title'>Done!</h2>
      <div className='done'>
        {todos.map((todo) =>
          todo.isDone === true ? (
            <div>
              <Todo
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                handleDone={handleDone}
              />
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default List;
