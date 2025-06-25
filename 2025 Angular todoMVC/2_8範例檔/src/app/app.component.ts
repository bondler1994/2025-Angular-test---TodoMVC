import { Component } from '@angular/core';
import { Todo } from './@module/todo-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OneTodo';
  placeholder = 'What needs to be done????';

  toggleAllBtn = false;
  check1 = false;
  check2 = false;

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
  }

  delete(index: number) {
    this.todoDataList.splice(index, 1);
  }

  add(value: string) {
    const todo: Todo = {
      Status: false,
      Thing: value,
      Editing: false,
    };
    this.todoDataList.push(todo);
  }

  edit(item: Todo) {
    item.Editing = true;
  }

  updateItem(item: Todo, value: string) {
    item.Thing = value;
    item.Editing = false;
  }
}
