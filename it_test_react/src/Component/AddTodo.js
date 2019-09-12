import React, { Component } from 'react';
import {inject ,observer } from "mobx-react"
@inject("TodoStore")
@observer
class AddTodo extends Component {

  handleAddTodo(e){
    e.preventDefault()
    const todo = this.todo.value
    this.props.TodoStore.addTodo(todo)
    this.todo.value = ""
    localStorage.setItem("todoList",this.props.TodoStore.todoList)
  }
 

    render() {
        return (
        <form onSubmit= {e => this.handleAddTodo(e)} className="addToDo">
        <input type="text" placeholder="Hãy Nhập Công Việc..." ref={input => this.todo = input}/>
        <button className="btnAddNew" >Thêm Mới</button>
      </form>
        );
    }
}

export default AddTodo;