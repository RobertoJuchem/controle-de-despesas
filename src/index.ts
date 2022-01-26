import {expenseDBInstance} from './database'
import { getExpense } from './getHtmlValues'

function addExpenses(): void{
   const getItems = getExpense()
   expenseDBInstance.createNewExpense(getItems)
   console.log(getItems)
}

function showExpenses(){
   const showitems = getExpense()
   expenseDBInstance.consultExpenses(showitems)
   console.log(showitems)
}