export abstract class View<T>{
   element: HTMLElement
   constructor(selector: string){
      this.element = document.querySelector(selector)
   }
   protected abstract template(model:T): string

   update(model:T):void{
      const template = this.template(model)
      this.element.innerHTML = template
   }
}