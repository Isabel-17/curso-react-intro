import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';


// const defaultTodos= [
//   {text: 'Lavar loza', completed: false},
//   {text: 'Barrer', completed: false},
//   {text: 'Hacer almuerzo', completed: false},
//   {text: 'Sacar a Lupe 3 veces', completed: false},
//   {text: 'Sacar a Lupe 2 veces mas', completed: false},
//   {text: 'Cortar cebolla', completed: false},

// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))



function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue , setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter( 
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase()
      return todoText.includes(searchText);
    }
  );
    
  const completeTodo = (text) => {   
  const newTodos = [...todos]
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };


  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
  };

return (
  <AppUI
    completedTodos ={completedTodos}
    totalTodos ={totalTodos}
    searchValue ={searchValue}
    setSearchValue ={setSearchValue}
    searchedTodos ={searchedTodos}
    completeTodo ={completeTodo}
    deleteTodo ={deleteTodo}
  />
)

}



export default App;