import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
