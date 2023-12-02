import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarInformeComponent } from './pages/listar-informe/listar-informe.component';
import { AgregarInformeComponent } from './pages/agregar-informe/agregar-informe.component';

const routes: Routes = [
  {
    path:'listar-informe',
    component: ListarInformeComponent,
  },
  {
    path:'agregar-informe',
    component: AgregarInformeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformeRoutingModule { }
