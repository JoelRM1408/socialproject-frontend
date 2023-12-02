import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarInformeComponent } from './pages/listar-informe/listar-informe.component';
import { ValidadInformeComponent } from './pages/validad-informe/validad-informe.component';

const routes: Routes = [
  {
    path:'listar-inf',
    component: ListarInformeComponent,
  },
  {
    path:'validar-inf',
    component: ValidadInformeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidarInformeRoutingModule { }
