import React from 'react';
import LineTodo from './LineTodo';

const ListTodo = ({todos,checkedHolder,deleteHolder}) => {
  return (
    <ul>
        {todos.map(todo => {
        return (
         <LineTodo 
         key = {todo.id} 
         todo = {todo}
         checkedHolder = {checkedHolder}
         deleteHolder = {deleteHolder}
         />
            )
            })}
  </ul>
  );
};

export default ListTodo;
