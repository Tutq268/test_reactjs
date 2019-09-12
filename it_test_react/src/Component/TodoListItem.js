import React, { Component } from 'react';
import {inject ,observer } from "mobx-react"



@inject("TodoStore")
@observer
class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: "none",
      showTodo : "flex",
      
    }
  }
 
  
 
  editTodoItem = () => {
    this.setState({
      showEdit: "flex",
      showTodo : "none"
    });
    
  }
   
  deleteTodoItem = () => {
    this.props.TodoStore.todoList.splice(this.props.index,1)
    localStorage.setItem("todoList",this.props.TodoStore.todoList)

    if(localStorage.getItem("todoList") === ""){
      localStorage.removeItem("todoList")
    }
  }


  saveTodoItemUpdate = () => {
   
    let newTodoUpdate = this.newTodo.value
    this.props.TodoStore.todoList[this.props.index] = newTodoUpdate
    localStorage.setItem("todoList",this.props.TodoStore.todoList)

    this.setState({
      showEdit: "none",
      showTodo : "flex"
    });
   
  }
  
    render() {
        return (
            <li>
            <div className="todoListItem" style={{display: this.state.showTodo}}>
            <div className="colorLine" style = {{ backgroundColor: this.props.color}} />
            <div className="todoName">
              <p>{this.props.todoName}</p>
            </div>
            <div className="todoStatus">
              <button onClick = {() => this.editTodoItem()} className="editTodo">Sửa</button>
              <span>|</span>
              <button onClick = {() => this.deleteTodoItem()} className="deleteTodo">Xoá</button>
            </div>
          </div>
          <div className="todoListItem" style={{display: this.state.showEdit}}>
          <div className="colorLine" style = {{ backgroundColor: this.props.color}} />
        <input type="text" defaultValue = {this.props.todoName} ref= {input => this.newTodo = input}/>
        <button onClick = {() => this.saveTodoItemUpdate()} className="btnAddNew">Lưu</button>
      </div>
            </li>
        );
    }
}

export default TodoListItem;