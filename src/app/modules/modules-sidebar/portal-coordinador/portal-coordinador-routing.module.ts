import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('./documento-intervencion/documento-intervencion.module').then(m=>m.DocumentoIntervencionModule),
  },
  {
    path:'py',
    loadChildren: ()=>import('./proyecto/proyecto.module').then(m=>m.ProyectoModule),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalCoordinadorRoutingModule { }
