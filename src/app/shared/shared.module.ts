import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from './icons/icons.module';
import { SidebarAlumnoComponent } from './components/sidebar-alumno/sidebar-alumno.component';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    ImgBrokenDirective,
    SidebarAlumnoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    IconModule,
    MatIconModule,
    MatExpansionModule
  ],
    exports:[
    SidebarComponent,
    HeaderComponent,
    SidebarAlumnoComponent
  ]
})
export class SharedModule { }
