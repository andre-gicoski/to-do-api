import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.type';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  async create(@Body() todo: Todo): Promise<Todo> {
    return await this.todoService.create(todo);
  }

  @Get()
  async findMany(): Promise<Todo[]> {
    return await this.todoService.findMany();
  }

  @Get(':id')
  async findById(@Param() params: Pick<Todo, 'id'>): Promise<Todo> {
    return await this.todoService.findById(params.id);
  }

  @Delete(':id')
  async delete(@Param() params: Pick<Todo, 'id'>): Promise<Todo> {
    return await this.todoService.delete(params.id);
  }

  @Put(':id')
  async update(@Param() params: Todo, @Body() todo: Todo): Promise<any> {
    return await this.todoService.update(todo, params.id);
  }
}
