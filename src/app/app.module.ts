import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MiComponenteChachiComponent } from './mi-componente-chachi/mi-componente-chachi.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, MiComponenteChachiComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
