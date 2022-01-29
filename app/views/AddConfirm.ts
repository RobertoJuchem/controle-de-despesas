import { View } from "./View.js"

export class AddConfirm extends View<string>{

   protected template(model: string):string{
      return `
      <p class="alert alert-warning">${model}</p>
      `
   }
   update(model: string):void{
      const template = this.template(model)
      this.element.innerHTML = template
   }
}