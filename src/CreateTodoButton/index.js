import './CreateTodoButton.css'

function CreaterTodoButton({ setOpenModal }) {
    return (
        <div>
            <button className='CreaterTodoButton'
            onClick={
                () => {
                    setOpenModal(state => !state)
                }
            }
            >+</button>
        </div>
    )
  }
  
  export { CreaterTodoButton }
