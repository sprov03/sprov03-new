import { Component, OnInit } from '@angular/core';
import {Todo, TodosService} from '../../../services/todos.service';

@Component({
  selector: 'app-todo-dashboard-page',
  templateUrl: './todo-dashboard-page.component.html'
})
export class TodoDashboardPageComponent implements OnInit {
  public todos: Todo[];
  constructor(private todoService: TodosService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  toggleTodoCompleted(todo: Todo) {
    TodosService.toggleTodoIsCompleted(todo);
    this.todoService.updateTodo(todo).subscribe((response) => console.log(response));
  }
}
