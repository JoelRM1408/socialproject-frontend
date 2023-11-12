import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionarAccesoRoutingModule } from './gestionar-acceso-routing.module';
import { GestionarAccesoComponent } from './pages/gestionar-acceso/gestionar-acceso.component';


@NgModule({
  declarations: [
    GestionarAccesoComponent
  ],
  imports: [
    CommonModule,
    GestionarAccesoRoutingModule
  ]
})
export class GestionarAccesoModule { }
