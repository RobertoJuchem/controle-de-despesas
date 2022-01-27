import { GetExpense } from "./models/getHtmlValues.js";

const registerButton = new GetExpense()
const table = document.querySelector('#registerButton')
table.addEventListener('click', event =>{
   event.preventDefault()
   registerButton.getNewExpense()
})