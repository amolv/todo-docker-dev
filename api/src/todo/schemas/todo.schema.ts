// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
// import { Document } from 'mongoose'

// export type TodoDocument = Todo & Document;

// @Schema()
// export class Todo {
//     @Prop({ required:true })
//     id : Number;
//     @Prop()
//     title: String;
//     @Prop()
//     status: String;
// }

// export const TodoSchema = SchemaFactory.createForClass( Todo )

import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  id: Number,
  title: String,
  completed: Boolean,
});
