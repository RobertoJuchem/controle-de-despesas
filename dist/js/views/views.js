export class Views {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    template(model) {
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
           ${model.consultExpenses().map(list => {
            return `
            <tr>
               <td>${new Intl.DateTimeFormat().format(list.dateItem)}</td>
               <td>${list.type}</td>
               <td>${list.desription}</td>
               <td>R$ ${list.value}</td>
            </tr>
            `;
        }).join('')}
         </tbody>
      </table>
      `;
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
