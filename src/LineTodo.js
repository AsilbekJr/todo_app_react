import React from 'react';

const LineTodo = ({todo,checkedHolder, deleteHolder}) => {
  return (
    <li><input 
        type="checkbox"
        id={todo.id}
        checked={todo.checked}
        onChange = {() => checkedHolder(todo.id)}
        />
        <p
        style = {{textDecoration: todo.checked ? 'line-through' : 'none',color: todo.checked ? '#999' : '#333'}}
        >{todo.todo}</p>
        <button 
        className="deleteBtn"
        onClick = {() => deleteHolder(todo.id)}
        >Delete</button>
    </li>
  );
};

export default LineTodo;
