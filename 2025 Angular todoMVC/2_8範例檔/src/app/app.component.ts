import { Component, inject, OnInit } from '@angular/core';
import { Todo, TodoClass, TodoStatusType } from './@module/todo-items';
import { TodoService } from './@services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'OneTodo';
  placeholder = 'What needs to be done????';

  todoStatusType = TodoStatusType;

  todoInputModule = '';

  constructor(private todoService: TodoService) {}

  // 使用 inject() 函數來注入 HttpClient
  // private http = inject(HttpClient); qqqqqqqqqqq
  ngOnInit(): void {}

  toggleAll() {
    this.todoService.toggleAll();
  }

  clickCheck(item: Todo) {
    this.todoService.clickCheck(item);
  }

  addtoImmediatelyUpdate() {
    this.todoService.addtoImmediatelyUpdate(this.todoInputModule);

    this.todoInputModule = '';
  }

  updateItem(item: Todo) {
    this.todoService.updateItem(item);
  }

  delete(item: Todo) {
    this.todoService.delete(item);
  }

  clearCompleted() {
    this.todoService.deleteAll();
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
