import React from 'react';
import Header from '../components/header/Header';
import Form from '../components/form/Form';
import List from '../components/list/List';
import Layout from '../components/layout/Layout';
import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  // console.log(todos);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  const handleDone = (id) => {
    const doneItem = todos.map((todo) => {
      if (todo.id === id) {
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(doneItem);
  };

  const handleDelete = (id) => {
    const deleteItem = [...todos].filter((todos) => todos.id !== id);
    setTodos(deleteItem);
  };

  return (
    <Layout>
      <Header />
      <Form addTodo={addTodo} />
      <List todos={todos} handleDelete={handleDelete} handleDone={handleDone} />
    </Layout>
  );
};

export default TodoList;
