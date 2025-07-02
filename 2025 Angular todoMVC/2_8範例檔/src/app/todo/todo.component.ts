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

  delete(item: Todo) {
    this.todoDataList = this.todoDataList.filter((data) => data !== item);
  }

  clearCompleted(item: Todo) {
    this.todoDataList = this.todoDataList.filter(
      (todo) => !todo.Status || todo !== item,
    );
    // 這裡也可以呼叫 API 做同步刪除
  }

  get todoActive(): Todo[] {
    return this.todoDataList.filter((data) => !data.Status);
  }
}
