import { Views } from '../views/views.js'
import {SavedItems} from './database.js'
import { FilterExpenses } from './Expenses.js'

export class GetExpense {
   private type: HTMLInputElement
   private month: HTMLInputElement
   private description: HTMLInputElement
   private value: HTMLInputElement
   private DBexpenses = new SavedItems()
   private viewExpenses = new Views('#view')
   
   constructor() {
      this.type = document.querySelector('#type') as HTMLInputElement
      this.month = document.querySelector('#month') as HTMLInputElement
      this.description = document.querySelector('#description') as HTMLInputElement
      this.value = document.querySelector('#value') as HTMLInputElement
      this.viewExpenses.update(this.DBexpenses)
   }
   getInputValues(): FilterExpenses{
      const inputType = this.type.value
      const exp = /-/g
      const inputMonth = new Date(this.month.value.replace(exp, ','))
      const inputDescription = this.description.value
      const inputValue = this.value.value
      return new FilterExpenses(inputMonth, inputType, inputDescription, inputValue)
   }
   getNewExpense(): void{
      const expenselist = this.getInputValues()
      expenselist.dateItem.setDate(12)
      this.DBexpenses.createNewExpense(expenselist)
      this.viewExpenses.update(this.DBexpenses)
      this.clearInputs()
   }
   clearInputs(): void{
      this.type.value = ''
      this.month.focus()
      this.description.value = ''
      this.value.value = ''
   }
}



