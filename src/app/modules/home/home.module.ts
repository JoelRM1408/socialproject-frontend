import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ProyectoModule } from '../proyecto/proyecto.module';
import { ConveniosModule } from '../convenios/convenios.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProyectoModule,
    ConveniosModule,
    SharedModule
  ]
})
export class HomeModule { }
