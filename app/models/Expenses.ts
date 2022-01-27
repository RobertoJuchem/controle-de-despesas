export class FilterExpenses {
   constructor(private _date: Date, readonly type: string, readonly desription: string, readonly value: string){}

   get dateItem(): Date {
      const date = new Date(this._date.getTime())
      return date
   }
   get typeItem(): string{
      return this.type
   }
   get descriptionItem(): string{
      return this.desription
   }
   get valueItem(): string{
      return this.value
   }
}