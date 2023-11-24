import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { StandComponent } from 'src/app/shared/components/stand/stand.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

import { DocumentoIntervencionRoutingModule } from './documento-intervencion-routing.module';
import { DocumentoIntervencionComponent } from './pages/documento-intervencion/documento-intervencion.component';
import { AgregarDocintComponent } from './pages/agregar-docint/agregar-docint.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ModalvistaComponent } from './pages/modalvista/modalvista.component';
import { ModaleditarComponent } from './pages/modaleditar/modaleditar.component';


@NgModule({
  declarations: [
    DocumentoIntervencionComponent,
    AgregarDocintComponent,
    ModalvistaComponent,
    ModaleditarComponent
  ],
  imports: [
    CommonModule,
    DocumentoIntervencionRoutingModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    StandComponent,
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
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class DocumentoIntervencionModule { }
