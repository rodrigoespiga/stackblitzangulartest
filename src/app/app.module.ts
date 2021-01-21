import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MiComponenteChachiComponent } from './mi-componente-chachi/mi-componente-chachi.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';
import { BotonComponent } from './boton/boton.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MiComponenteChachiComponent, OtroComponenteComponent, BotonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
