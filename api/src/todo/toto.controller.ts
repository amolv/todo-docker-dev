import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { NewTodoDto } from './todo.dto';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  public async getTodos() {
    return await this.todoService.getTodos();
  }

  @Get(':id')
  public async getTodoById() {
    return await this.todoService.getTodos();
  }

  @Post()
  public async postTodos(@Body() newtodo: NewTodoDto) {
    return await this.todoService.postTodo(newtodo);
  }

  @Delete(':id')
  public async deleteTodoById(@Param('id') id: string) {
    return await this.todoService.deleteTodoById(id);
  }

  @Put(':id')
  public async putTodoById(@Param('id') id: string, @Body() body) {
    console.log('query', id, body);
    const title = body.title;
    const completed = body.completed;
    return await this.todoService.putTodoById(id, title, completed);
  }
}
