export class FilterExpenses {
    constructor(_date, type, desription, value) {
        this._date = _date;
        this.type = type;
        this.desription = desription;
        this.value = value;
    }
    get dateItem() {
        const date = new Date(this._date.getTime());
        return date;
    }
    get typeItem() {
        return this.type;
    }
    get descriptionItem() {
        return this.desription;
    }
    get valueItem() {
        return this.value;
    }
}
