import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProyectoComponent } from './pages/listar-proyecto/listar-proyecto.component';
import { RegistrarProyectoComponent } from './pages/registrar-proyecto/registrar-proyecto.component';

const routes: Routes = [
  {
    path:'listapy',
    component: ListarProyectoComponent,
  },
  {
    path:'registrarpy',
    component: RegistrarProyectoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoRoutingModule { }
