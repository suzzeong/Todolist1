import { useState } from 'react';
import React, { useRef } from 'react';
import './style.css';

const Form = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const nextId = useRef(0);
  const handleInputTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleInputContent = (e) => {
    setContent(e.target.value);
  };

  const submitTodo = (event) => {
    event.preventDefault();
    const todo = {
      title: title,
      content: content,
      id: (nextId.current += 1),
      isDone: false,
    };
    addTodo(todo);
    title !== '' && content !== '' ? addTodo(todo) : alert('입력하세요');
    setTitle('');
    setContent('');
    // console.log(title, content);
  };
  // console.log(addTodo);

  return (
    <div className='form'>
      <div>
        <p>Title</p>
        <input
          type='text'
          name='title'
          value={title}
          onChange={handleInputTitle}
        />
        <p>Content</p>
        <input
          type='text'
          name='content'
          value={content}
          onChange={handleInputContent}
        />
        <button type='button' onClick={submitTodo}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Form;
