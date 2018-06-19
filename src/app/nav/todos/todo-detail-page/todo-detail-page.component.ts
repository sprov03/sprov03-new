import { Component, OnInit } from '@angular/core';
import {Todo, TodosService} from '../../../services/todos.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-todo-detail-page',
  templateUrl: './todo-detail-page.component.html',
  styles: []
})
export class TodoDetailPageComponent implements OnInit {
  public todo: Todo;

  constructor(private todoService: TodosService, private activatedRoute: ActivatedRoute, public location: Location) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.todoService.getTodo(params.todo_id).subscribe((todo) => {
        this.todo = todo;
      });
    });
  }
}
