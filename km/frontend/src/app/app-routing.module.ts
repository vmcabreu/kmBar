import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { ComidaComponent } from './components/comida/comida.component';
import { MesasComponent } from './components/mesas/mesas.component';
import { ComandasComponent } from './components/comandas/comandas.component';
import { AuthGuard } from './service/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';
import { CRUDComponent } from './components/CRUD/crud.component';

const routes: Routes = [
  {path: "", component: MenuComponent,canActivate: [AuthGuard]},
  {path: "login", component: LoginComponent},
  {path: "mesas", component: MesasComponent,canActivate: [AuthGuard]},
  {path: "comida", component: ComidaComponent,canActivate: [AuthGuard]},
  {path: "bebidas", component: BebidasComponent,canActivate: [AuthGuard]},
  {path: "ingresos", component: IngresosComponent,canActivate: [AuthGuard]},
  {path: "crud", component: CRUDComponent,canActivate: [AuthGuard]},
  {path: "mesas/:id", component: ComandasComponent,canActivate: [AuthGuard]},
  {path: "comida/:categoria", component: ComidaComponent,canActivate: [AuthGuard]},
  {path: "bebidas/:categoria", component: BebidasComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
