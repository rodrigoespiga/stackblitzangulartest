import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  @Output() valorRandomEventEmitter = new EventEmitter<number>();
  public valorRandom: number = 1.0;

  constructor() { }

  ngOnInit() {
  }

  public generarRandom(){
    let valorGenerado = Math.random();
    this.valorRandomEventEmitter.emit(valorGenerado);
    this.valorRandom = valorGenerado;

  }

}