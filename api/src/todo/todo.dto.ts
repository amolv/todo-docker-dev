export class TodoDto {
  readonly id: string;
  readonly title: string;
  readonly completed: boolean;
}

export class NewTodoDto {
  readonly title: string;
  readonly completed: boolean;
}
