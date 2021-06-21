import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TodoController } from "./toto.controller";
import { TodoService } from "./todo.service";
import { TodoSchema } from "src/todo/schemas/todo.schema";

@Module({
    imports: [ MongooseModule.forFeature([{ name : 'Todos', schema : TodoSchema  }])],
    controllers: [ TodoController],
    providers: [ TodoService]
})

export class TodoModule {}
