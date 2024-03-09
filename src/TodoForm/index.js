import React from "react";
import { TodoContext } from '../TodoContext'
import { create } from "../Api";
import './TodoForm.css'


function TodoForm ( ) { 
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        if(!newTodoValue.trim()) return

        let body = {
            title: newTodoValue,
            status: "Pending",
            priority: "High",
            type: "Development"
        }
        let result = await create(body)
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    
    const onChange = (event) => {
       setNewTodoValue(event.target.value);
    };


    return(
        <form onSubmit={onSubmit}>
            <label>¡Añade tu nuevo TODO!✨</label>
            <textarea 
                placeholder="Cortar cebolla"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button 
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>    

                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--accept"
                >Aceptar</button>
            </div>
        </form>
    )
}

export { TodoForm };