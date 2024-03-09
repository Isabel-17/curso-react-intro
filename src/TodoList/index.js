import React, {useState, useEffect} from "react";
import { getTodos } from "../Api";
import { TodoItem } from "../TodoItem";

function TodoList() {

    const [todos, setTodos] = useState([])

    useEffect(()=> {getTodoList()}, [])

    const getTodoList = async () => {
        console.count("Llamando...")
        let todos = await getTodos()
        setTodos(todos)
    }

    return (
        <div>
            <ul>
                {todos.map(todo=> <TodoItem key={todo._id} todo={todo}/>)}
            </ul>
        </div>
    );
  }
  export { TodoList } 

