import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PieComponent } from './pie/pie.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { TituloComponent } from './titulo/titulo.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { DesarrolloComponent } from './desarrollo/desarrollo.component';
import { FinalidadComponent } from './finalidad/finalidad.component';
import { ComercialComponent } from './comercial/comercial.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PieComponent,
    ContenidoComponent,
    TituloComponent,
    EncabezadoComponent,
    DesarrolloComponent,
    FinalidadComponent,
    ComercialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
