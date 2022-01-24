interface IExpense{
   id: string
   type: string
   day: string
   month: string
   description: string
   value: string
}

class Expense implements IExpense{
   id: string
   type: string;
   day: string;
   month: string;
   description: string;
   value: string;

   constructor(type: string, day:string, month:string, description:string, value:string){
      this.id = `${Math.floor(Math.random() * (500000000 -1))}`
      this.type = type
      this.day = day
      this.month = month
      this.description = description
      this.value = value
   }
}

let savedListExpenses: Expense[] = []

function getExpense(){
   const type = document.querySelector('#type') as HTMLInputElement
   const day = document.querySelector('#day') as HTMLInputElement
   const month = document.querySelector('#month') as HTMLInputElement
   const description = document.querySelector('#description') as HTMLInputElement
   const value = document.querySelector('#value') as HTMLInputElement
   
   const savedlist= new Expense(type.value, day.value, month.value, description.value, value.value)
   
   return savedlist
}

function addExpenses(){
   const teste = getExpense()
   savedListExpenses.push(teste)
   console.log(savedListExpenses)
}