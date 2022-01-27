export class SavedItems {
    constructor() {
        this.savedListExpenses = [];
    }
    createNewExpense(newExpense) {
        this.savedListExpenses.push(newExpense);
    }
    consultExpenses() {
        return this.savedListExpenses;
    }
}
