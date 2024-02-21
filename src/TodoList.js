import './TodoList.css'

function TodoList({ children }) {
    return (
        <div className='children'>
            <ul>
                {children}
            </ul>
        </div>
    );
  }
  export { TodoList } 