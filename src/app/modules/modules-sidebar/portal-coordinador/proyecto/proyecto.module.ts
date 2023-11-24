import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ProyectoRoutingModule } from './proyecto-routing.module';
import { ListarProyectoComponent } from './pages/listar-proyecto/listar-proyecto.component';
import { RegistrarProyectoComponent } from './pages/registrar-proyecto/registrar-proyecto.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ListarProyectoComponent,
    RegistrarProyectoComponent
  ],
  imports: [
    CommonModule,
    ProyectoRoutingModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [
    DatePipe
  ],
})
export class ProyectoModule { }
