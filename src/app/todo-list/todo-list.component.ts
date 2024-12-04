import { Component } from '@angular/core';
import { Todos } from '../models/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: Todos[] = [
    {
      id: Date.now(),
      title: 'Take dog for a walk',
      status: false,
      date: new Date(),
    },
    {
      id: Date.now(),
      title: 'Buy groceries',
      status: false,
      date: new Date(),
    },
  ];

  newTodoItem: string = '';

  addTodos = (todo: string) => {
    var newTodo: Todos = {
      id: Date.now(),
      title: todo,
      status: false,
      date: new Date(),
    };
    this.todos.push(newTodo);
    this.newTodoItem = '';
  };
}
