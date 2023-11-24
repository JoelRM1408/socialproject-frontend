import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { TipodocintService } from '../../../service/tipodocint/tipodocint.service';
import { DocintService } from '../../../service/docint/docint.service';
import { Tipodocint } from 'src/app/core/models/tipodocint';
import { Docint } from 'src/app/core/models/docint';
import { SharedDataService } from 'src/app/modules/modules-sidebar/portal-coordinador/documento-intervencion/shared/shared-data.service';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listar-proyecto',
  templateUrl: './listar-proyecto.component.html',
  styleUrls: ['./listar-proyecto.component.css']
})
export class ListarProyectoComponent {



  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'nombredocint', 'tipo', 'fechaini', 'fechafin', 'estado', 'doc','acciones']

  prueba(){

  }
}
