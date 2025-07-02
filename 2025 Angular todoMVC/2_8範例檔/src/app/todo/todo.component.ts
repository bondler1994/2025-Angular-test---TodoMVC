import { Component, OnInit } from '@angular/core';
import { Todo, TodoClass, TodoStatusType } from '../@module/todo-items';
import { TodoApiService } from '../@services/todo-api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  title = 'OneTodo';

  toggleAllBtn = false;
  nowTodoStatusType = TodoStatusType.All;
  todoStatusType = TodoStatusType;

  todoDataList: Todo[] = [];

  constructor(private todoApiService: TodoApiService) {}

  // 使用 inject() 函數來注入 HttpClient
  // private http = inject(HttpClient); qqqqqqqqqqq
  ngOnInit(): void {
    this.todoApiService.add().subscribe((data: any) => {
      this.todoDataList = data;
    });
  }

  get todoActive(): Todo[] {
    return this.todoDataList.filter((data) => !data.Status);
  }
}
