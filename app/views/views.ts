import { SavedItems } from "../models/database.js"


export class Views {
   elemento: HTMLElement
   constructor(selector: string){
      this.elemento = document.querySelector(selector)
   }
   template(model: SavedItems): string {
      return `
      <table>
         <thead>
            <tr>
               <th>Data</th>
               <th>Tipo</th>
               <th>Descrição</th>
               <th>Valor</th>
            </tr>
         </thead>
         <tbody>
           ${model.consultExpenses().map(list =>{
            return `
            <tr>
               <td>${new Intl.DateTimeFormat().format(list.dateItem)}</td>
               <td>${list.type}</td>
               <td>${list.desription}</td>
               <td>R$ ${list.value}</td>
            </tr>
            `
           }).join('')}
         </tbody>
      </table>
      `
   }
   update(model: SavedItems): void {
      const template = this.template(model)
      console.log(template)
      this.elemento.innerHTML = template
   }
}