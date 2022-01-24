"use strict";
class Expense {
    constructor(type, day, month, description, value) {
        this.id = `${Math.floor(Math.random() * (500000000 - 1))}`;
        this.type = type;
        this.day = day;
        this.month = month;
        this.description = description;
        this.value = value;
    }
}
let savedListExpenses = [];
function getExpense() {
    const type = document.querySelector('#type');
    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const description = document.querySelector('#description');
    const value = document.querySelector('#value');
    const savedlist = new Expense(type.value, day.value, month.value, description.value, value.value);
    return savedlist;
}
function addExpenses() {
    const teste = getExpense();
    savedListExpenses.push(teste);
    console.log(savedListExpenses);
}
