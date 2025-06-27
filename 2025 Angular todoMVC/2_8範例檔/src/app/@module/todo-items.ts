export interface Todo {
  Status: boolean;
  Thing: string;
  Editing: boolean;
  TodoId: string;
}

export class TodoClass {
  //class 需要初始直接赋值
  //否则会报错：Property 'Status' has no initializer and is not definitely assigned
  Status: boolean = false;
  Thing: string = '';
  Editing: boolean;
  TodoId: string;
  constructor(_thing: string, _status: boolean = false) {
    this.Thing = _thing;
    this.Status = _status;
    this.Editing = false;
    this.TodoId = '';
  }
  toggle() {
    this.Status = !this.Status;
  }
}

// Enum for Todo status types
// This enum can be used to filter todos based on their status
export enum TodoStatusType {
  All,
  Active,
  Completed,
}
