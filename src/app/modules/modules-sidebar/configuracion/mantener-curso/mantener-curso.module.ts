import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenerCursoRoutingModule } from './mantener-curso-routing.module';
import { MantenerCursoComponent } from './pages/mantener-curso/mantener-curso.component';


@NgModule({
  declarations: [
    MantenerCursoComponent
  ],
  imports: [
    CommonModule,
    MantenerCursoRoutingModule
  ]
})
export class MantenerCursoModule { }
