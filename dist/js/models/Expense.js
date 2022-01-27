import { Views } from '../views/views.js';
import { SavedItems } from './Database.js';
export class Expense {
    constructor(type, day, month, description, value) {
        this.view = new Views('#view');
        this.database = new SavedItems();
        this.id = `${Math.floor(Math.random() * (500000000 - 1))}`;
        this.type = type;
        this.day = day;
        this.month = month;
        this.description = description;
        this.value = value;
        this.view.uptdate(this.database);
    }
}
