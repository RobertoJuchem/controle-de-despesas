import { AddConfirm } from '../views/AddConfirm.js';
import { MessageViews } from '../views/MessageViews.js';
import { SavedItems } from './database.js';
import { FilterExpenses } from './Expenses.js';
export class GetExpense {
    constructor() {
        this.DBexpenses = new SavedItems();
        this.viewExpenses = new MessageViews('#view');
        this.addConfirm = new AddConfirm('#addConfirm');
        this.type = document.querySelector('#type');
        this.month = document.querySelector('#month');
        this.description = document.querySelector('#description');
        this.value = document.querySelector('#value');
        this.viewExpenses.update(this.DBexpenses);
    }
    getNewExpense() {
        const expenselist = this.getInputValues();
        this.DBexpenses.createNewExpense(expenselist);
        this.clearInputs();
        this.updateView();
    }
    getInputValues() {
        const inputType = this.type.value;
        const exp = /-/g;
        const inputMonth = new Date(this.month.value.replace(exp, ','));
        const inputDescription = this.description.value;
        const inputValue = this.value.value;
        return new FilterExpenses(inputMonth, inputType, inputDescription, inputValue);
    }
    clearInputs() {
        this.type.value = '';
        this.description.value = '';
        this.value.value = '';
    }
    updateView() {
        this.viewExpenses.update(this.DBexpenses);
        this.addConfirm.update('Despesa adicionada com sucesso!');
    }
}
