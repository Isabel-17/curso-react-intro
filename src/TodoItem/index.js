import React, {useState } from 'react';
import './TodoItem.css'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import {CompleteIcon } from '../TodoIcon/CompleteIcon'
import { deleteTodoById, updateTodo } from '../Api';

function TodoItem({todo}) {

    const onDelete = async (id) => {
      let result = await deleteTodoById(id)
      if(result.status !== 200) alert("Hubo un error")
    }

    const update = async (todo) => {
      const { _id, title, priority, type} = todo;
      let body = {
        title,
        status: "Completed",
        priority,
        type,
      }

      let result = await updateTodo(_id, body)
    }    

    const isDone = param => param === "Completed"

    return (
      <li className="todo-item">
        <CompleteIcon
          onComplete={()=> update(todo)}
        />
          <p className={`TodoItem-p ${isDone(todo.status) && "TodoItem-p--complete"}`}>
            {todo.title}
          </p>
        <DeleteIcon
          onDelete={()=> onDelete(todo._id)}
        />
        
      </li>
    );
  }

  export { TodoItem };