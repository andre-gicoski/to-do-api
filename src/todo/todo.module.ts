import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { PrismaModule } from 'src/db/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TodoService, TodoController],
  exports: [TodoService],
  controllers: [TodoController]
})
export class TodoModule {}
