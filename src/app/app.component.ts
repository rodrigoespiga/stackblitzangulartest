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

  /** Muestra por consola la estructura de componentes Angular presentes en la pantalla */
  private logComponentHierarchy() {
    Array.from(document.querySelectorAll("*"))
      .filter(x => x.nodeName.indexOf("APP") != -1)
      .forEach(x => {
        //let nestingLevel = 0;
        //let tabulation = "";
        let parent = x.parentNode;
        let parentsChain = "";
        do {
          if (parent.nodeName.indexOf("APP") != -1) {
            //nestingLevel++;
            //tabulation += "#";
            parentsChain = "[" + parent.nodeName + "]>>" + parentsChain;
          }
          parent = parent.parentNode;
        } while (parent != null);

        /*
        let atributes = Array.from(x.attributes);
        let nghostAttribute = atributes.filter(atributo => atributo.name.indexOf("nghost") != -1)[0];
        let nghostAttributeName = nghostAttribute.name;
        console.log(parentsChain + "[" + x.nodeName + "(" + nghostAttributeName + ")]");
        //*/
        console.log(parentsChain + "[" + x.nodeName + "]");
      });
  }

  ngOnInit() {
    console.log("OnInit");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit");
    this.logComponentHierarchy();
  }

  public cambiarValorLeido(eventoRecibido) {
    this.valorLeido = eventoRecibido;
  }
}
