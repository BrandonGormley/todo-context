import React, { useState } from 'react';
import { useGlobalContext } from '../context/context';

const TodoForm = () => {
  const { dispatch, state } = useGlobalContext();
  const [taskInput, setTaskInput] = useState('');
  const [dateInput, setDateInput] = useState('');

  const handleTaskInput = e => {
    setTaskInput(e.target.value);
  };

  const handleDateInput = e => {
    setDateInput(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (taskInput && dateInput) {
      const newTask = {
        task: taskInput,
        dueDate: dateInput,
        id: Math.random() * 10000,
      };
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setTaskInput('');
      setDateInput('');
      return;
    }

    if (!taskInput && !dateInput) {
      dispatch({ type: 'FORM_ERROR' });
      return;
    }

    setTaskInput('');
    setDateInput('');
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className='border-2 border-slate-200 shadow-md shadow-slate-100 w-full max-w-sm mx-auto flex flex-col justify-center items-center rounded-lg'
    >
      {state.isMessage && (
        <p
          className={
            state.messageStyles === 'Added'
              ? 'bg-green-400 text-white py-1 px-4 rounded-md text-xs my-2'
              : 'bg-red-400 text-white py-1 px-4 rounded-md text-xs my-2'
          }
        >
          {state.message}
        </p>
      )}
      <div className='flex flex-col '>
        <label className='text-xs text-slate-600' htmlFor='task'>
          Task:
        </label>
        <input
          onChange={handleTaskInput}
          className='outline-none border-2 border-slate-300 rounded-md pl-2 text-slate-600'
          type='text'
          name='task'
          id='task'
          value={taskInput}
        />
      </div>
      <div className='flex flex-col my-2'>
        <label className='text-xs text-slate-600' htmlFor='dueDate'>
          Due Date:
        </label>
        <input
          onChange={handleDateInput}
          className='outline-none border-2 border-slate-300 rounded-md pl-2 text-slate-600'
          type='text'
          name='dueDate'
          id='dueDate'
          value={dateInput}
        />
      </div>
      <button
        className='bg-slate-700 text-slate-50 rounded-md my-2 py-1 px-10 hover:bg-slate-600 transition-all'
        type='submit'
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
