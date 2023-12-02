import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidarInformeRoutingModule } from './validar-informe-routing.module';
import { ValidadInformeComponent } from './pages/validad-informe/validad-informe.component';
import { ListarInformeComponent } from './pages/listar-informe/listar-informe.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ValidadInformeComponent,
    ListarInformeComponent
  ],
  imports: [
    CommonModule,
    ValidarInformeRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ValidarInformeModule { }
