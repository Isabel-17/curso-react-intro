import './TodoCounter.css';

function TodoCounter({completed, total}) {
  return (
    <div className='counter'>
      <h1 className='title'>
        Has completado
        <span className='prop'>{completed}</span>
        de
        <span className='prop'>{total}</span>
        TODO's
      </h1>
    </div>
  )
}

export { TodoCounter }  