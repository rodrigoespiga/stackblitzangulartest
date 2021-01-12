import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hola {{name}}!</h1><h5>otraCosa = {{otraCosa}}</h5><app-mi-componente-chachi></app-mi-componente-chachi>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  otraCosa = 'El valor de otra cosa';
}
