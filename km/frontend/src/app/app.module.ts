import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { ComidaComponent } from './components/comida/comida.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { ComandasComponent } from './components/comandas/comandas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BebidasComponent,
    ComidaComponent,
    MesasComponent,
    ComandasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
