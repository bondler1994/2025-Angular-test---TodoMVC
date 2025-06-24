import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OneTodo';
  placeholder = 'What needs to be done????'

  toggleAllBtn = false;
  check1 = false;
  check2 = false;

  todoDataList = [
    {
      Status: true,
      Thing: '第一件事情'
    }, {
      Status: false,
      Thing: '第二件事情'
    }, {
      Status: false,
      Thing: '第三件事情'
    },
  ];

  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.todoDataList.forEach(data => {
      data.Status = this.toggleAllBtn;
    });
  }

  clickCheck(item: any) {
    item.Status = !item.Status;
  }

  delete(index: number) {
    this.todoDataList.splice(index, 1);
  }

  add(value: string) {
    this.todoDataList.push({
      Status: false,
      Thing: value
    });
  }


}
