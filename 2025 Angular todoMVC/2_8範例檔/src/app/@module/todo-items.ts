export interface Todo {
  Status: boolean;
  Thing: string;
  Editing: boolean;
}

export class TodoClass {
  //class 需要初始直接赋值
  //否则会报错：Property 'Status' has no initializer and is not definitely assigned
  Status: boolean = false;
  Thing: string = '';
  constructor(_thing: string, _status: boolean = false) {
    this.Thing = _thing;
    this.Status = _status;
  }
  toggle() {
    this.Status = !this.Status;
  }
}
