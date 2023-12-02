import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformeRoutingModule } from './informe-routing.module';
import { ListarInformeComponent } from './pages/listar-informe/listar-informe.component';
import { AgregarInformeComponent } from './pages/agregar-informe/agregar-informe.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ListarInformeComponent,
    AgregarInformeComponent
  ],
  imports: [
    CommonModule,
    InformeRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class InformeModule { }
