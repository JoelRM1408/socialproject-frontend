import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarUsuarioComponent } from './pages/gestionar-usuario/gestionar-usuario.component';

const routes: Routes = [
  {
    path:'',
    component: GestionarUsuarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionarUsuarioRoutingModule { }
