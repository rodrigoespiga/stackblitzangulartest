import { Component, VERSION, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  public valorLeido: number;
  public tamanoFuente: number = 12; //valor incialmente pasado al sizer

  ngOnInit() {
    Array.from(document.querySelectorAll("*")).forEach(x => {
      if (x.nodeName.indexOf("APP") != -1) {
        console.log(x.nodeName);
      }
    });
  }

  public cambiarValorLeido(eventoRecibido) {
    this.valorLeido = eventoRecibido;
    
  }
}
