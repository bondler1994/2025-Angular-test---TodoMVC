import { Injectable } from '@angular/core';
import { Todo, TodoClass, TodoStatusType } from '../@module/todo-items';
import { TodoApiService } from './todo-api.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  toggleAllBtn = false;
  nowTodoStatusType = TodoStatusType.All;
  todoDataList: Todo[] = [];

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

  get todoActive(): Todo[] {
    return this.todoDataList.filter((data) => !data.Status);
  }
  get todoComplete(): Todo[] {
    return this.todoDataList.filter((data) => data.Status);
  }

  constructor(private todoApiService: TodoApiService) {
    this.getData();
  }
  getData() {
    this.todoApiService.add().subscribe((apiData: any) => {
      this.todoDataList = apiData.map((item: any) => ({
        ...item,
        Editing: false,
        TodoId: item.TodoId || '',
      }));
      this.clickCheckToggleAllBtn();
    });
  }

  toggleAll() {
    this.toggleAllBtn = !this.toggleAllBtn;
    this.todoDataList.forEach((data: any) => {
      data.Status = this.toggleAllBtn;
    });
    this.todoApiService.toggleAll(this.toggleAllBtn).subscribe();
  }

  clickCheck(item: Todo) {
    item.Status = !item.Status;
    this.todoApiService.put(item).subscribe();
    this.clickCheckToggleAllBtn();
  }

  clickCheckToggleAllBtn() {
    if (this.todoComplete.length === this.todoDataList.length) {
      this.toggleAllBtn = true;
    } else {
      this.toggleAllBtn = false;
    }
  }

  addtoImmediatelyUpdate(value: string) {
    const seqno = new Date().getTime();
    const todo: any = new TodoClass(value, false, seqno);
    this.todoDataList.push(todo);
    this.todoApiService.post(todo).subscribe((data) => {
      this.todoDataList.forEach((data2: any) => {
        if (data2.Seqno === seqno) {
          data2.TodoId = data.TodoId;
          data2.CanEdit = true;
        }
      });
    });
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
}
