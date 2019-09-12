import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import {inject ,observer } from "mobx-react"


@inject("TodoStore")
@observer
class TodoList extends Component {
    getTodo(){
     
      return this.props.TodoStore.todoList.map((todo,key) => {
        if(key % 2 == 0){
          return (
            <TodoListItem index = {key} key = {key} todoName={todo} color = "#4A90E2"/>
          )
        }
        else {
          return (
            <TodoListItem index = {key} key = {key} todoName={todo} color = "#D21129"/>
          )
        }
         
      })
    }
    render() {
        return (
            
            <div className="todoList">                
            <ul>
            {this.getTodo()}
               
            </ul>
          </div>
        );
    }
}

export default TodoList;