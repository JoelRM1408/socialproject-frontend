import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'convenio',
    loadChildren: () => import('../convenios/convenios.module').then(m => m.ConveniosModule)
  },
  {
    path:'proyecto',
    loadChildren: () => import('../proyecto/proyecto.module').then(m => m.ProyectoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
