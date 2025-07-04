import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/@models/todo.model';

@Component({
  selector: 'app-todo-info-modal',
  templateUrl: './todo-info-modal.component.html',
  styleUrls: ['./todo-info-modal.component.scss'],
})
export class TodoInfoModalComponent implements OnInit {
  todoInfoModal: any;
  // The todo item to display in the modal
  // This property is bound to the parent component's nowSelectTodo
  // and is used to show the details of the selected todo item.
  // The ! operator indicates that this property will be initialized
  // before it is used, so TypeScript does not complain about it being possibly undefined.
  @Input() todo!: Todo;
  constructor() {}

  ngOnInit(): void {}

  show() {
    if (!this.todoInfoModal) {
      this.todoInfoModal = new bootstrap.Modal(
        document.getElementById('todoInfoModal'),
        {
          keyboard: false,
        }
      );
    }
    this.todoInfoModal.show();
  }
}
