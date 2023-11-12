import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DifundirActividadesRoutingModule } from './difundir-actividades-routing.module';
import { DifundirActividadesComponent } from './pages/difundir-actividades/difundir-actividades.component';


@NgModule({
  declarations: [
    DifundirActividadesComponent
  ],
  imports: [
    CommonModule,
    DifundirActividadesRoutingModule
  ]
})
export class DifundirActividadesModule { }
