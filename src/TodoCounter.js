import './TodoCounter.css';

function TodoCounter({completed, total}) {
  return (
    <div className='counter'>
      <h1 className='title'>
        Has completado {completed} de {total} TODOS
    </h1>
    </div>
  )
}

export { TodoCounter } 