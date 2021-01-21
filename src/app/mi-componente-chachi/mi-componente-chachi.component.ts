import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mi-componente-chachi',
  templateUrl: './mi-componente-chachi.component.html',
  styleUrls: ['./mi-componente-chachi.component.css']
})
export class MiComponenteChachiComponent implements OnInit {
  @Input() renderizarSubcomponente: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}