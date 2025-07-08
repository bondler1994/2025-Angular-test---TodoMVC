import { TodoService } from 'src/app/@services/todo.service';
import { TodoApiService } from './../@services/todo-api.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Todo } from '../@models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoResolver implements Resolve<Todo[]> {
  constructor(
    private todoApiService: TodoApiService,
    private todoService: TodoService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Todo[]> {
    const id = route.paramMap.get('id') as string;
    this.todoService.gid = id;
    return this.todoApiService.取得資料(id);
  }
}
