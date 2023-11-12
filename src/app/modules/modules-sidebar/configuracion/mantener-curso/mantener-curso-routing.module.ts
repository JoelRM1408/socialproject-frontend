import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenerCursoComponent } from './pages/mantener-curso/mantener-curso.component';

const routes: Routes = [
  {
    path:'',
    component: MantenerCursoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantenerCursoRoutingModule { }
