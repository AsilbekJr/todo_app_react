import React from 'react';

const AddTodo = ({submitHendler,newTodo,setNewTodo}) => {
  return (
    <form className="addTodoForm" onSubmit = {submitHendler}>
            <input 
            type="text"
            className="addTodo"
            placeholder="Add todo"
            value = {newTodo}
            onChange = {(e) => setNewTodo(e.target.value) }
            />
            <button type="submit">Add todo</button>
 </form>
  );
};

export default AddTodo;
