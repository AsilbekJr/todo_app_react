import React from 'react';
import { useState,useEffect } from 'react';
import AddTodo from './AddTodo';
import ListTodo from './ListTodo';


function App() {

  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem('todo')) || []);


  const [newTodo, setNewTodo] = useState('');



  /* checked holder */
  const checkedHolder = (id) =>{
  let listTodo = todos.map((dos) => 
          dos.id === id ? {...dos, checked:!dos.checked} : dos )
         setTodos(listTodo);
       
  }
  useEffect(() => {
    localStorage.setItem('todo',JSON.stringify(todos))
  }, [todos]);
 

  /* Delete holder */

  const deleteHolder = (id) => {
    let listTodo = todos.filter(todo => 
        todo.id !==id
    )
   setTodos(listTodo)
   
  }
  const submitHendler = (e) => {
     e.preventDefault();
     if(!newTodo) return;
    let id = (todos) ? todos.length + 1 : 1;
    let myTodo = {id,todo:newTodo,checked:false}
    let listTodo = [...todos,myTodo];
    setTodos(listTodo);
    setNewTodo('');
    
  }


  return (
    <div className="app">
      
       <div className="todo-container">
       <AddTodo  
       submitHendler = {submitHendler}
       newTodo = {newTodo} 
       setNewTodo = {setNewTodo}
       />
       { todos.length ?
       <ListTodo 
       todos = {todos}
       checkedHolder = {checkedHolder}
       deleteHolder = {deleteHolder}
       /> 
       : <p style = {{textAlign: 'center',marginTop: '3rem'}}>Do you havn't todo :(</p>
       }
       </div>
    </div>
  );
}

export default App;
