import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import './App.css';
import { CreaterTodoButton } from './CreateTodoButton';


const defaultTodos= [
  {text: 'Lavar loza', completed: false},
  {text: 'Barrer', completed: false},
  {text: 'Hacer almuerzo', completed: true},
  {text: 'Sacar a Lupe 3 veces', completed: false}
];
function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreaterTodoButton />
    </React.Fragment>

  );
}



export default App;
