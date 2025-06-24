export interface Todo {
  Status: boolean;
  Thing: string;
}

export class TodoClass {
  Status: boolean;
  Thing: string;
  constructor(_thing: string, _status: boolean) {
    this.Status = _status;
    this.Thing = _thing;
  }
}
