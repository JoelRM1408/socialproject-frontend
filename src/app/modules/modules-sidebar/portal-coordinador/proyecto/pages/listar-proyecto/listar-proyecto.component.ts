import { FacultadService } from './../../../service/facultad/facultad.service';
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
import { ProyectoService } from '../../../service/proyecto/proyecto.service';
import { TipopyService } from '../../../service/tipopy/tipopy.service';
import { SemestreService } from '../../../service/semestre/semestre.service';
import { EpService } from '../../../service/ep/ep.service';
import { Tipopy } from 'src/app/core/models/tipopy';
import { Proyecto } from 'src/app/core/models/proyecto';
import { Semestre } from 'src/app/core/models/semestre';
import { Ep } from 'src/app/core/models/ep';
import { Facultad } from 'src/app/core/models/facultad';

@Component({
  selector: 'app-listar-proyecto',
  templateUrl: './listar-proyecto.component.html',
  styleUrls: ['./listar-proyecto.component.css']
})
export class ListarProyectoComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort)sort: MatSort = new MatSort;


  tipospy:Tipopy[] =[];
  proyectos: Proyecto[]=[];
  semestres: Semestre[]=[];
  facultades: Facultad[]=[];
  esp: Ep[]=[];

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'nombrepy', 'tipo', 'semestre', 'localidad', 'estado','acciones']
  constructor(
    public fb:FormBuilder,
    public tipopyService:TipopyService,
    public proyectoService: ProyectoService,
    public semestreService: SemestreService,
    public facultadService: FacultadService,
    public epService: EpService,
    private sharedDataService: SharedDataService,
    public dialog: MatDialog,
    private datePipe: DatePipe
  ){

  }
  ngOnInit() {
    this.proyectoService.getallProyectos().subscribe(resp => {
      this.proyectos = resp;
      this.setDataAndPagination();
    });
    this.tipopyService.getalltipospy().subscribe(resp => {
      this.tipospy = resp;
      //console.log(resp);
    },
      error => { console.error(error) }
    );
    this.semestreService.getallSemestres().subscribe(resp => {
      this.semestres = resp;
    },
      error => { console.error(error) }
    )

  }
  prueba(){

  }
  setDataAndPagination(){
    this.dataSource = new MatTableDataSource(this.proyectos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
