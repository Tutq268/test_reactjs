import {observable,action,computed} from 'mobx'

class TodoStore {
   @observable todoList = []
   @action addTodo = (todo) => {
       this.todoList.push(todo)
   }
  
   @computed get getTodoList(){
       return this.todoList.length
   }
}
const store = new TodoStore()
export default store