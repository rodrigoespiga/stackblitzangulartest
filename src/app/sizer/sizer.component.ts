import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css']
})
export class SizerComponent implements OnInit {
  // Debe llamarse el Input loQueSea y el Output loQueSeaChange

  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  decrementar() { this.resize(-1); }
  incrementar() { this.resize(+1); }

  resize(delta: number) {
    // Entre 8 y 40
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

}