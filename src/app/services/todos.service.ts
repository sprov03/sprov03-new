import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private todoUrl = '/api/todos';

  public static toggleTodoIsCompleted(todo: Todo) {
    todo.isComplete = ! todo.isComplete;
  }

  constructor(private http: HttpClient) { }

  getTodo(id: number | string): Observable<Todo> {
    return this.http.get<Todo>(`${this.todoUrl}/${parseInt(<string>id, 10)}`);
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}`);
  }

  updateTodo(todo: Todo): Observable<null> {
    return this.http.put<null>(`${this.todoUrl}/${todo.id}`, todo);
  }
  createTodo(todo: Todo): Observable<null> {
    return this.http.post<null>(`${this.todoUrl}`, todo);
  }
}

export class Todo {
  id: number;
  isComplete: boolean;
  title: string;
  description: string;
}
