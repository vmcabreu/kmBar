import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { ComidaComponent } from './components/comida/comida.component';
import { MesasComponent } from './components/mesas/mesas.component';

const routes: Routes = [
  {path: "", component: MenuComponent},
  {path: "mesas", component: MesasComponent},
  {path: "comida", component: ComidaComponent},
  {path: "bebidas", component: BebidasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
