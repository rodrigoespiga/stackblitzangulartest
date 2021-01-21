import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h6 class="alert alert-info text-center mb-0">Hola {{ name }}!</h6>    
  `,
  styles: [
    `
      h6 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;  
}
