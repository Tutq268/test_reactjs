import React, { Component } from 'react';
import './../App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import {inject ,observer } from "mobx-react"

@inject("TodoStore")
@observer
class App extends Component {
   getAllTodo = () =>{
    let todoList = localStorage.getItem("todoList")
    if(todoList !== null){

      let list = todoList.split(",")
      list.forEach(todo => {
         this.props.TodoStore.addTodo(todo)
       });
    }
  }
 
  render(){
    this.getAllTodo()
    return (
      <div className="container">
      <div id="title">
        <h1>TO DO LIST</h1>
      </div>
      <div className="block">
        <AddTodo />
        <TodoList />
      </div>
    </div>
    
    
    );
  }
}

export default App;
