import { Expense } from "./Expense"

export function getExpense(): Expense{
   const type = document.querySelector('#type') as HTMLInputElement
   const day = document.querySelector('#day') as HTMLInputElement
   const month = document.querySelector('#month') as HTMLInputElement
   const description = document.querySelector('#description') as HTMLInputElement
   const value = document.querySelector('#value') as HTMLInputElement
   
   const savedlist= new Expense(type.value, day.value, month.value, description.value, value.value)
   
   return savedlist
}