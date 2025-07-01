import { TodoApiService } from './../../@services/todo-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @Input()
  toggleAllBtn!: boolean;

  get todoComplete(): Todo[] {
    return this.todoDataList.filter((item: Todo) => item.Status);
  }

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
}
