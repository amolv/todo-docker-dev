import { Model } from 'mongoose';
import { Injectable, HttpException } from '@nestjs/common';
import { TodoType } from './interfaces/todo.interface';
import { TodoDto } from './todo.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel('Todos')
    private todoModel: Model<TodoType>,
  ) {}

  public async getTodos(): Promise<TodoDto[]> {
    const todos = await this.todoModel.find().exec();
    if (!todos || !todos[0]) {
      throw new HttpException('Not Found', 404);
    }
    return todos;
  }

  public async postTodo(newTodo: TodoDto) {
    const todo = await this.todoModel.create(newTodo);
    return todo.save();
  }
}
