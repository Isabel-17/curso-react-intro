import './TodoItem.css'

function TodoItem(props) {
    return (
      
      <li className="item justify">
        <div className='item'>
          <span >
            V
          </span>
          <p className='lspacing'>
            {props.text}
          </p>
        </div>
        <span>
          X
        </span>
      </li>
    );
  }

  export { TodoItem };