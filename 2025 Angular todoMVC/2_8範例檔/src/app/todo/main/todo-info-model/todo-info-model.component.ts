import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/@module/todo-items';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-todo-info-model',
  templateUrl: './todo-info-model.component.html',
  styleUrls: ['./todo-info-model.component.scss'],
})
export class TodoInfoModelComponent implements OnInit {
  todoInfoModel: any;
  CreateTime: Date = new Date();
  declare bootstrap: any;
  constructor() {}
  @Input() todo!: Todo;

  ngOnInit(): void {}

  show() {
    if (!this.todoInfoModel) {
      this.todoInfoModel = new this.bootstrap.Modal(
        document.getElementById('todoInfoModel'),
        {
          keyboard: false,
        },
      );
      this.todoInfoModel.show();
    }
  }
}
