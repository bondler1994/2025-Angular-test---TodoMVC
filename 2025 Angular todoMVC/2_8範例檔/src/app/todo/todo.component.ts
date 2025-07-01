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

  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.todoDataList.forEach((data: any) => {
      data.Status = this.toggleAllBtn;
    });
    this.todoApiService.toggleAll(this.toggleAllBtn).subscribe();
  }

  clickCheck(item: Todo) {
    item.Status = !item.Status;
    if (this.todoComplete.length === this.todoDataList.length) {
      this.toggleAllBtn = true;
    } else {
      this.toggleAllBtn = false;
    }
  }

  updateItem(item: Todo) {
    this.todoApiService.put(item).subscribe();
    item.Editing = false;
  }

  delete(item: Todo) {
    this.todoApiService.delete(item).subscribe(() => {
      this.todoDataList = this.todoDataList.filter((data) => data !== item);
    });
  }

  clearCompleted() {
    const idList = this.todoDataList
      .filter((data) => data.Status)
      .map((data) => data.TodoId)
      .join(',');
    this.todoApiService.deleteAll().subscribe();
    this.todoDataList = this.todoActive;
  }

  edit(item: Todo) {
    item.Editing = true;
  }

  setTodoStatusType(type: number) {
    this.nowTodoStatusType = type;
  }

  get nowTodoList() {
    let list: Todo[] = [];
    switch (this.nowTodoStatusType) {
      case TodoStatusType.Active:
        list = this.todoActive;
        break;
      case TodoStatusType.Completed:
        list = this.todoComplete;
        break;
      default:
        list = this.todoDataList;
        break;
    }
    return list;
  }

  get todoActive(): Todo[] {
    return this.todoDataList.filter((data) => !data.Status);
  }
  get todoComplete(): Todo[] {
    return this.todoDataList.filter((data) => data.Status);
  }
}
