import './CreateTodoButton.css'
function CreaterTodoButton() {
    return (
        <div>
            <button className='CreaterTodoButton'
            onClick={
                (event) => {
                console.log('Le diste click') 
                console.log(event) 
                console.log(event.target) 
                }
            }
            >+</button>
        </div>
    )
  }
  
  export { CreaterTodoButton }
