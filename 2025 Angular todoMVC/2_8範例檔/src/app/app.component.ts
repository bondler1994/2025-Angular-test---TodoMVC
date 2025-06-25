import { Component } from '@angular/core';
// import { Todo } from './app/@module/todo-items';
import { TodoClass } from './@module/todo-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OneTodo';
  placeholder = 'What needs to be done????';

  toggleAllBtn = false;
  check1 = false;
  check2 = false;

  todoDataList: TodoClass[] = [
    {
      Status: true,
      Thing: '第一件事情',
    },
    {
      Status: false,
      Thing: '第二件事情',
    },
    {
      Status: false,
      Thing: '第三件事情',
    },
  ].map((data) => new TodoClass(data.Thing, data.Status));

  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.todoDataList.forEach((data) => {
      data.Status = this.toggleAllBtn;
    });
  }

  clickCheck(item: TodoClass) {
    // 使用类的方法来切换状态
    // 这样可以确保状态的切换逻辑在类内部处理
    item.toggle();
  }

  delete(index: number) {
    this.todoDataList.splice(index, 1);
  }

  // 直接使用字符串数组
  // add(value: string) {
  //   this.todoDataList.push({
  //     Status: false,
  //     Thing: value,
  //   });
  // }

  // 使用 Todo 接口
  // 这样可以确保添加的对象符合 Todo 接口的结构
  // add(value: string) {
  //   const todo: Todo = {
  //     Status: false,
  //     Thing: value,
  //   };
  //   this.todoDataList.push(todo);
  // }

  add(value: string) {
    // 使用 TodoClass 类来创建新的待办事项
    // 这样可以确保添加的对象符合 TodoClass 的结构
    // 并且可以使用类的方法和属性
    this.todoDataList.push(new TodoClass(value));
  }
}
