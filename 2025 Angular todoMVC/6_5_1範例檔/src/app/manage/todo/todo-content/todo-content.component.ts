import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/@services/todo.service';

@Component({
  selector: 'app-todo-content',
  templateUrl: './todo-content.component.html',
  styleUrls: ['./todo-content.component.scss'],
})
export class TodoContentComponent implements OnInit {
  title = 'OneTodo';
  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.todoService.todoDataList = [];
    this.route.paramMap.subscribe((data) => {
      this.todoService.gid = data.get('id') as string;
      this.todoService.getData();
    });
  }
}
