import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalAlumnoRoutingModule } from './portal-alumno-routing.module';
import { InformeComponent } from './informe/pages/informe.component';


@NgModule({
  declarations: [
    InformeComponent
  ],
  imports: [
    CommonModule,
    PortalAlumnoRoutingModule
  ]
})
export class PortalAlumnoModule { }
