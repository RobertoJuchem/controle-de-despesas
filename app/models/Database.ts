import { FilterExpenses } from "./Expenses";

export class SavedItems {
   savedListExpenses: FilterExpenses[] = []

   createNewExpense(newExpense: FilterExpenses){
      this.savedListExpenses.push(newExpense)
   }
   consultExpenses(): FilterExpenses[]{
      return this.savedListExpenses
   }
}
