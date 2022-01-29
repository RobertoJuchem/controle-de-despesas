import { SavedItems } from "../models/database.js"
import { View } from "./View.js"

export class MessageViews extends View<SavedItems>{

   protected template(model: SavedItems): string {
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
      this.element.innerHTML = template
   }
}