import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'equipo',
    loadChildren: ()=>import('./equipo/equipo.module').then(m=>m.EquipoModule),
  },
  {
    path:'informe',
    loadChildren: ()=>import('./informe/informe.module').then(m=>m.InformeModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalAlumnoRoutingModule { }
