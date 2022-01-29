import { AddConfirm } from '../views/AddConfirm.js'
import { MessageViews } from '../views/MessageViews.js'
import {SavedItems} from './database.js'
import { FilterExpenses } from './Expenses.js'

export class GetExpense {
   private type: HTMLInputElement
   private month: HTMLInputElement
   private description: HTMLInputElement
   private value: HTMLInputElement
   private DBexpenses = new SavedItems()
   private viewExpenses = new MessageViews('#view')
   private addConfirm = new AddConfirm('#addConfirm')
   
   constructor() {
      this.type = document.querySelector('#type') as HTMLInputElement
      this.month = document.querySelector('#month') as HTMLInputElement
      this.description = document.querySelector('#description') as HTMLInputElement
      this.value = document.querySelector('#value') as HTMLInputElement
      this.viewExpenses.update(this.DBexpenses)
   }
   getNewExpense(): void{
      const expenselist = this.getInputValues()
      this.DBexpenses.createNewExpense(expenselist)
      this.clearInputs()
      this.updateView()
   }
   private getInputValues(): FilterExpenses{
      const inputType = this.type.value
      const exp = /-/g
      const inputMonth = new Date(this.month.value.replace(exp, ','))
      const inputDescription = this.description.value
      const inputValue = this.value.value
      return new FilterExpenses(inputMonth, inputType, inputDescription, inputValue)
   }
   private clearInputs(): void{
      this.type.value = ''
      this.description.value = ''
      this.value.value = ''
   }
   private updateView():void{
      this.viewExpenses.update(this.DBexpenses)
      this.addConfirm.update('Despesa adicionada com sucesso!')
   }
}



