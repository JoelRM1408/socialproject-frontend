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


import { PortalCoordinadorRoutingModule } from './portal-coordinador-routing.module';
import { MatCard, MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PortalCoordinadorRoutingModule,
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
    MatCardModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PortalCoordinadorModule { }
