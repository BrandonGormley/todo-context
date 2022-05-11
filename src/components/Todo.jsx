import React from 'react';
import { useGlobalContext } from '../context/context';

const Todo = ({ task, dueDate, id }) => {
  const { dispatch } = useGlobalContext();

  const handleRemoveTask = taskId => {
    dispatch({ type: 'REMOVE_TASK', payload: taskId });
  };

  return (
    <li className='max-w-sm w-full mx-auto p-4 my-4 bg-slate-100 border-2 border-slate-200 flex flex-row justify-between'>
      <div className='flex flex-col'>
        <p className='text-slate-800 '>{task}</p>
        <p className='text-xs text-slate-600'>{dueDate}</p>
      </div>
      <p
        onClick={() => handleRemoveTask(id)}
        className='text-white text-xs bg-red-500 w-4 h-4 rounded-full text-center hover:cursor-pointer'
      >
        X
      </p>
    </li>
  );
};

export default Todo;
