import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async findMany(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async create(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({ data });
  }

  async delete(id: string): Promise<Todo> {
    return this.prisma.todo.delete({ where: { id } });
  }

  async update(data: Todo, id:string): Promise<Todo> {
    return this.prisma.todo.update({
      where: { id: id },
      data: { name: data.name, description: data.description },
    });
  }

  async findById(id: string): Promise<Todo | null> {
    const response = this.prisma.todo.findUnique({ where: { id } });
    return response;
  }
}
