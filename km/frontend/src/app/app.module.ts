import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { ComidaComponent } from './components/comida/comida.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { ComandasComponent } from './components/comandas/comandas.component';
import { LoginComponent } from './components/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PrecioPipe } from './pipes/precio.pipe';
import { AuthInterceptor } from './service/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BebidasComponent,
    ComidaComponent,
    MesasComponent,
    ComandasComponent,
    LoginComponent,
    PrecioPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
