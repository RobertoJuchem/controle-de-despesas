import { Views } from '../views/views.js';
import { SavedItems } from './database.js';
import { FilterExpenses } from './Expenses.js';
export class GetExpense {
    constructor() {
        this.DBexpenses = new SavedItems();
        this.viewExpenses = new Views('#view');
        this.type = document.querySelector('#type');
        this.month = document.querySelector('#month');
        this.description = document.querySelector('#description');
        this.value = document.querySelector('#value');
        this.viewExpenses.update(this.DBexpenses);
    }
    getInputValues() {
        const inputType = this.type.value;
        const exp = /-/g;
        const inputMonth = new Date(this.month.value.replace(exp, ','));
        const inputDescription = this.description.value;
        const inputValue = this.value.value;
        return new FilterExpenses(inputMonth, inputType, inputDescription, inputValue);
    }
    getNewExpense() {
        const expenselist = this.getInputValues();
        expenselist.dateItem.setDate(12);
        this.DBexpenses.createNewExpense(expenselist);
        this.viewExpenses.update(this.DBexpenses);
        this.clearInputs();
    }
    clearInputs() {
        this.type.value = '';
        this.month.focus();
        this.description.value = '';
        this.value.value = '';
    }
}
