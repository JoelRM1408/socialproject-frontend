import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalAlumnoRoutingModule } from './portal-alumno-routing.module';
import { ListarInformeComponent } from './informe/pages/listar-informe/listar-informe.component';
import { AgregarInformeComponent } from './informe/pages/agregar-informe/agregar-informe.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PortalAlumnoRoutingModule,
    
  ]
})
export class PortalAlumnoModule { }
