import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  return (
    <section className='my-6'>
      <TodoForm />
      <TodoList />
    </section>
  );
};

export default TodoApp;
