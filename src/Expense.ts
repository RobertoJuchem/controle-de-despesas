import {IExpense} from './Interface'

export class Expense implements IExpense{
   id: string
   type: string;
   day: string;
   month: string;
   description: string;
   value: string;

   constructor(type: string, day:string, month:string, description:string, value:string){
      this.id = `${Math.floor(Math.random() * (500000000 -1))}`
      this.type = type
      this.day = day
      this.month = month
      this.description = description
      this.value = value
   }
}