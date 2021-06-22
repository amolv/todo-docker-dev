import { Model } from 'mongoose';
import { Injectable, HttpException } from '@nestjs/common';
import { TodoType } from './interfaces/todo.interface';
import { TodoDto } from './todo.dto';
import { InjectModel } from '@nestjs/mongoose';

const todoProjection = {
  __v: false,
};

@Injectable()
export class TodoService {
  constructor(
    @InjectModel('Todos')
    private todoModel: Model<TodoType>,
  ) {}

  public async getTodos(): Promise<TodoDto[]> {
    const todos = await this.todoModel.find({}, todoProjection).exec();
    if (!todos || !todos[0]) {
      throw new HttpException('Not Found', 404);
    }

    return todos.map((t) => ({
      id: t._id,
      title: t.title,
      completed: t.completed,
    }));
  }

  public async postTodo(newTodo: TodoType) {
    const todo = await this.todoModel.create(newTodo);
    const t = await todo.save();
    return { id: t._id, title: t.title, completed: t.completed };
  }

  public async deleteTodoById(id: string): Promise<number> {
    const todo = await this.todoModel.deleteOne({ _id: id }).exec();
    if (todo.deletedCount === 0) {
      throw new HttpException('Not found', 404);
    }
    return todo.deletedCount;
  }
  public async putTodoById(
    id: string,
    newtitle: string,
    completedstatus: boolean,
  ): Promise<TodoDto> {
    const todo = await this.todoModel
      .findOneAndUpdate(
        { _id: id },
        {
          title: newtitle,
          completed: completedstatus,
        },
      )
      .exec();
    if (!todo) {
      throw new HttpException('Not found', 404);
    }
    return { id: todo._id, title: todo.title, completed: completedstatus };
  }
}
