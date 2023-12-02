import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipoRoutingModule } from './equipo-routing.module';
import { ListarEquipoComponent } from './pages/listar-equipo/listar-equipo.component';
import { ListarProyectoComponent } from './pages/listar-proyecto/listar-proyecto.component';
import { AgregarEquipoComponent } from './pages/agregar-equipo/agregar-equipo.component';


@NgModule({
  declarations: [
    ListarEquipoComponent,
    ListarProyectoComponent,
    AgregarEquipoComponent
  ],
  imports: [
    CommonModule,
    EquipoRoutingModule
  ]
})
export class EquipoModule { }
