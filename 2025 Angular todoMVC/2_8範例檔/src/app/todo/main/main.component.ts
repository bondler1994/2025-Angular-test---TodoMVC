import { TodoApiService } from './../../@services/todo-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoClass, TodoStatusType } from 'src/app/@module/todo-items';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input()
  toggleAllBtn!: boolean;

  @Input()
  todoDataList!: Todo[];

  @Input()
  nowTodoStatusType!: number;

  constructor(private todoApiService: TodoApiService) {}

  ngOnInit(): void {}

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

  edit(item: Todo) {
    item.Editing = true;
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

  get todoComplete(): Todo[] {
    return this.todoDataList.filter((data) => data.Status);
  }

  get todoActive(): Todo[] {
    return this.todoDataList.filter((data) => !data.Status);
  }
}
