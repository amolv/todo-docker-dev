import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TodoType } from './interfaces/todo.interface';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async getTodos(){
    return await this.todoService.getTodos();
  } 

  @Get(':id')
  async getTodoById(){
    return await this.todoService.getTodos();
  } 

  @Post()
  async postTodos( @Body() newtodo :  TodoType){     
    return await this.todoService.postTodo( newtodo );
  }
  
  @Delete()
  async deleteTodos(){
      const newtodo = { id : 1,
       title : 'string',
       status : 'string' }
    return await this.todoService.postTodo( newtodo );
  }

  @Put()
  async editTodos(){
      const newtodo = { id : 1,
       title : 'string',
       status : 'string' }
    return await this.todoService.postTodo( newtodo );
  }


}
