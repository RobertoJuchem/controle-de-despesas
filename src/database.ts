import { Expense } from './Expense'

export class SavedItems {
   savedListExpenses: Expense[] = []

   createNewExpense(newExpense: Expense){
      this.savedListExpenses.push(newExpense)
   }
   consultExpenses(showExpenses: Expense): Expense[]{
      return this.savedListExpenses.filter(({type, day, month}) => showExpenses.type ===type || showExpenses.day === day || showExpenses.month === month)
   }
   deleteExpense(expenseId: string){
      this.savedListExpenses = this.savedListExpenses.filter((expense) => expense.id !== expenseId)
   }
}

export const expenseDBInstance = new SavedItems()