import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DifundirActividadesComponent } from './pages/difundir-actividades/difundir-actividades.component';

const routes: Routes = [
  {
    path:'',
    component: DifundirActividadesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DifundirActividadesRoutingModule { }
