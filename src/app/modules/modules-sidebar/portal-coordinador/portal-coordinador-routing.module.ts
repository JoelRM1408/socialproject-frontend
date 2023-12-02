import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'docint',
    loadChildren: ()=>import('./documento-intervencion/documento-intervencion.module').then(m=>m.DocumentoIntervencionModule),
  },
  {
    path:'proyecto',
    loadChildren: ()=>import('./proyecto/proyecto.module').then(m=>m.ProyectoModule),
  },
  {
    path:'validarinf',
    loadChildren: ()=>import('./validar-informe/validar-informe.module').then(m=>m.ValidarInformeModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalCoordinadorRoutingModule { }
