import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;  
  public valorLeido:number;
  public tamanoFuente:number = 12; //valor incialmente pasado al sizer

  public cambiarValorLeido(eventoRecibido){
    this.valorLeido = eventoRecibido;

  }
}
