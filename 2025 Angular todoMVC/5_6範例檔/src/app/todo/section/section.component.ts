import { TodoInfoModalComponent } from './todo-info-modal/todo-info-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from 'src/app/@models/todo.model';
import { TodoService } from 'src/app/@services/todo.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  nowSelectTodo!: Todo;
  @ViewChild(TodoInfoModalComponent)
  private todoInfoModalComponent!: TodoInfoModalComponent;

  get toggleAllBtn() {
    return this.todoService.toggleAllBtn;
  }

  get nowTodoList() {
    return this.todoService.nowTodoList;
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  toggleAll() {
    this.todoService.toggleAll();
  }

  clickCheck(item: Todo) {
    this.todoService.clickCheck(item);
  }

  edit(item: Todo) {
    if (item.CanEdit) {
      item.Editing = true;
    }
  }

  update(item: Todo) {
    this.todoService.update(item);
  }

  delete(item: Todo) {
    this.todoService.delete(item);
  }

  modalShow(item: Todo) {
    this.nowSelectTodo = item;
    this.todoInfoModalComponent.show();
  }
}
