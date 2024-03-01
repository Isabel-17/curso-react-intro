import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos, 
  } = React.useContext(TodoContext)

  return (
    <div className='counter'>
      <h1 className='title'>
        Has completado&nbsp;
        <span className='prop'>{completedTodos}</span>
        &nbsp;de&nbsp;
        <span className='prop'>{totalTodos}</span>
        &nbsp;TODO's
      </h1>
    </div>
  )
}

export { TodoCounter }  