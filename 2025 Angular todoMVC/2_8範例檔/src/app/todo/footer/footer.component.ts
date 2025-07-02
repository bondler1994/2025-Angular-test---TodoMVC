import { TodoApiService } from './../../@services/todo-api.service';
import { TodoStatusType } from './../../@module/todo-items';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/@module/todo-items';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  @Input() nowTodoStatusType!: number;

  @Input() todoStatusType = TodoStatusType;

  @Input() todoDataList!: Todo[];

  constructor(private todoApiService: TodoApiService) {}

  ngOnInit(): void {}

  clearCompleted() {
    const idList = this.todoDataList
      .filter((data) => data.Status)
      .map((data) => data.TodoId)
      .join(',');
    this.todoApiService.deleteAll().subscribe();
    this.todoDataList = this.todoActive;
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
