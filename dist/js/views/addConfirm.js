import { View } from "./View.js";
export class AddConfirm extends View {
    template(model) {
        return `
      <p class="alert alert-warning">${model}</p>
      `;
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
