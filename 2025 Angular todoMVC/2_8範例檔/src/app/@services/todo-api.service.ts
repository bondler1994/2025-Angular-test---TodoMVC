import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../@module/todo-items';

@Injectable({
  providedIn: 'root',
})
export class TodoApiService {
  private url = 'api/todo2_16';

  constructor(private http: HttpClient) {}

  add() {
    return this.http.get<Todo[]>(this.url);
  }
  post(value: Todo) {
    return this.http.post<Todo>(this.url, value);
  }
  put(value: Todo) {
    return this.http.put(`${this.url}/${value.TodoId}`, value);
  }

  toggleAll(value: boolean) {
    return this.http.put(`${this.url}/Status/${value}`, null);
  }

  delete(value: Todo) {
    return this.http.delete(`${this.url}/${value.TodoId}`);
  }
  deleteAll() {
    return this.http.delete(`${this.url}/clearCompleted`);
  }
}
