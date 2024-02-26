import './TodoCounter.css';

function TodoCounter({completed, total}) {
  return (
    <div className='counter'>
      <h1 className='title'>
        Has completado&nbsp;
        <span className='prop'>{completed}</span>
        &nbsp;de&nbsp;
        <span className='prop'>{total}</span>
        &nbsp;TODO's
      </h1>
    </div>
  )
}

export { TodoCounter }  