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
        let nestingLevel = 0;
        let tabulation = "";
        let parent = x.parentNode;
        do {
          if (parent.nodeName.indexOf("APP") != -1) {
            nestingLevel++;
            tabulation += "#";
          }
          parent = parent.parentNode;
        } while (parent != null);

        let atributes = Array.from(x.attributes);
        let nghostAttribute = atributes.filter(
          atributo => atributo.name.indexOf("nghost") != -1
        )[0];
        let nghostAttributeName = nghostAttribute.name;

        console.log(tabulation + x.nodeName + "[" + nghostAttributeName + "]");
      }
    });
  }

  public cambiarValorLeido(eventoRecibido) {
    this.valorLeido = eventoRecibido;
  }
}
