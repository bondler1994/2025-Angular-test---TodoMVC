import { TodoApiService } from './@services/todo-api.service';
import { Component, inject, OnInit } from '@angular/core';
import { Todo, TodoClass, TodoStatusType } from './@module/todo-items';
import { TodoService } from './@services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OneTodo';
  placeholder = 'What needs to be done????';

  todoStatusType = TodoStatusType;

  todoInputModule = '';

  get nowTodoList() {
    return this.todoService.nowTodoList;
  }

  get todoActive(): Todo[] {
    return this.todoService.todoActive;
  }
  get todoComplete(): Todo[] {
    return this.todoService.todoComplete;
  }

  get toggleAllBtn() {
    return this.todoService.toggleAllBtn;
  }

  get nowTodoStatusType() {
    return this.todoService.nowTodoStatusType;
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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
    this.todoService.clearCompleted();
  }

  edit(item: Todo) {
    if (item.CanEdit) {
      item.Editing = true;
    }
  }

  setTodoStatusType(type: number) {
    this.todoService.setTodoStatusType(type);
  }
}
