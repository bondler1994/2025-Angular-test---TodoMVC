import { TodoApiService } from './../../@services/todo-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { TodoClass, Todo } from 'src/app/@module/todo-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  title!: string;
  todoInputModule!: string;

  @Input()
  todoDataList!: Todo[];

  constructor(private todoApiService: TodoApiService) {}

  ngOnInit(): void {}

  addtoImmediatelyUpdate() {
    const seqno = new Date().getTime();
    const todo: Todo = new TodoClass(this.todoInputModule, false, seqno);
    this.todoDataList.push(todo);
    this.todoApiService.post(todo).subscribe((data) => {
      this.todoDataList.forEach((data2: any) => {
        if (data2.Seqno === seqno) {
          data2.TodoId = data.TodoId;
          data2.CanEdit = true;
        }
      });
    });
    this.todoInputModule = '';
  }
}
