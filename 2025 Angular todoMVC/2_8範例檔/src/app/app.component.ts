import { Component } from '@angular/core';
import { Todo, TodoStatusType } from './@module/todo-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OneTodo';
  placeholder = 'What needs to be done????';
  toggleAllBtn = false;
  nowTodoStatusType = TodoStatusType.All;
  todoStatusType = TodoStatusType;

  todoInputModule = '';

  todoDataList: Todo[] = [
    {
      Status: true,
      Thing: '第一件事情',
      Editing: false,
    },
    {
      Status: false,
      Thing: '第二件事情',
      Editing: false,
    },
    {
      Status: false,
      Thing: '第三件事情',
      Editing: false,
    },
  ];

  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.todoDataList.forEach((data: any) => {
      data.Status = this.toggleAllBtn;
    });
  }

  clickCheck(item: Todo) {
    item.Status = !item.Status;
    if (this.todoComplete.length === this.todoDataList.length) {
      this.toggleAllBtn = true;
    } else {
      this.toggleAllBtn = false;
    }
  }

  delete(todo: Todo) {
    this.todoDataList = this.todoDataList.filter((data) => data !== todo);
  }

  add(value: string) {
    const todo: Todo = {
      Status: false,
      Thing: this.todoInputModule,
      Editing: false,
    };
    this.todoDataList.push(todo);
    this.todoInputModule = '';
  }

  edit(item: Todo) {
    item.Editing = true;
  }

  updateItem(item: Todo, value: string) {
    item.Thing = value;
    item.Editing = false;
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

  clearCompleted() {
    this.todoDataList = this.todoActive;
  }
}
