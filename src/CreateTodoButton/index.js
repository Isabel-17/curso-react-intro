import './CreateTodoButton.css'

function CreateTodoButton({ setOpenModal }) {
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
  
  export { CreateTodoButton }
