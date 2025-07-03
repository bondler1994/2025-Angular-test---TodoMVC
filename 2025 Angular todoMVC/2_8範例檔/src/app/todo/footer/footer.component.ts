import { TodoApiService } from './../../@services/todo-api.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Todo, TodoStatusType } from 'src/app/@module/todo-items';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() nowTodoStatusType!: number;

  @Input() todoStatusType = TodoStatusType;

  @Input() todoDataList!: Todo[];

  @Output() onDeleteAllItem = new EventEmitter<Todo>();

  constructor(private todoApiService: TodoApiService) {}

  ngOnInit(): void {}

  clearCompleted() {
    this.todoApiService.deleteAll().subscribe(() => {
      this.onDeleteAllItem.emit();
    });
  }

  setTodoStatusType(type: number) {
    this.nowTodoStatusType = type;
  }

  get todoComplete(): Todo[] {
    return this.todoDataList.filter((data) => data.Status);
  }

  get todoActive(): Todo[] {
    return this.todoDataList.filter((data) => !data.Status);
  }
}
