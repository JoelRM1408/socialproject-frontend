import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeSidebarAlumnoRoutingModule } from './home-sidebar-alumno-routing.module';
import { HomeSidebarAlumnoComponent } from './home-sidebar-alumno/home-sidebar-alumno.component';


@NgModule({
  declarations: [
    HomeSidebarAlumnoComponent
  ],
  imports: [
    CommonModule,
    HomeSidebarAlumnoRoutingModule,
    SharedModule
  ]
})
export class HomeSidebarAlumnoModule { }
