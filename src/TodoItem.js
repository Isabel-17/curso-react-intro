import './TodoItem.css'

function TodoItem(props) {
    return (
      <li className="todo-item">
          <span className={`Icon check  ${props.completed && "check--active"}`}></span>
          <p className={`TodoItem-p  ${props.completed && "TodoItem-p--complete"}`}>
            {props.text}
          </p>
        <span className='Icon close'></span>
      </li>
    );
  }

  export { TodoItem };