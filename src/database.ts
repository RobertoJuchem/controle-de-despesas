import { Expense } from './Expense'
import { IExpense } from './Interface'

export class SavedItems {
   savedListExpenses: IExpense[] = []

   createNewExpense(newExpense: Expense){
      this.savedListExpenses.push(newExpense)
   }
   getExpenseById(expenseId: string): Expense[]{
      return this.savedListExpenses.filter(({id}) => expenseId === id)
   }
   deleteExpense(expenseId: string){
      this.savedListExpenses = this.savedListExpenses.filter((expense) => expense.id !== expenseId)
   }
   searchExpenses(expenseId: string){
      const expenseConsult = expenseDBInstance.getExpenseById(expenseId)
      for(let expense of this.savedListExpenses){
         if(expense.id === expenseId){
            return expenseConsult
         }
      }
   }
}

export const expenseDBInstance = new SavedItems()