import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos'; 
import { CreateTodoButton } from '../CreateTodoButton'; 
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';


function AppUI () {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
    return (
      <>
        <TodoCounter />
        <TodoSearch />
        
        <TodoList />
        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />
        
        {!!openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </>
    );
  }
  
  export { AppUI };
