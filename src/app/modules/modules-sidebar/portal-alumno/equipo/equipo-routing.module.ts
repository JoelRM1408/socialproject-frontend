import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProyectoComponent } from './pages/listar-proyecto/listar-proyecto.component';

const routes: Routes = [
  {
    path:'listar-proyecto',
    component: ListarProyectoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipoRoutingModule { }
