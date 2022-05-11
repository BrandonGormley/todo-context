import React from 'react';
import { useGlobalContext } from '../context/context';
import Todo from './Todo';

const TodoList = () => {
  const { state } = useGlobalContext();
  console.log(state);
  return (
    <ul>
      {state.tasks.map(task => {
        return <Todo key={task.id} {...task} />;
      })}
    </ul>
  );
};

export default TodoList;
