import { Document } from "mongoose";

export interface TodoType extends Document {
     id : number;
     title : string;
     status : string;
}