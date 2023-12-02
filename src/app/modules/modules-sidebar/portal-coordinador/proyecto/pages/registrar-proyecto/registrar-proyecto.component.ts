import { CicloService } from './../../../service/ciclo/ciclo.service';
import { Component, ViewChild } from '@angular/core';
import { TipopyService } from '../../../service/tipopy/tipopy.service';
import { ProyectoService } from '../../../service/proyecto/proyecto.service';
import { FacultadService } from '../../../service/facultad/facultad.service';
import { EpService } from '../../../service/ep/ep.service';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { SemestreService } from '../../../service/semestre/semestre.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tipopy } from 'src/app/core/models/tipopy';
import { Proyecto } from 'src/app/core/models/proyecto';
import { Semestre } from 'src/app/core/models/semestre';
import { Facultad } from 'src/app/core/models/facultad';
import { Ep } from 'src/app/core/models/ep';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DocintService } from '../../../service/docint/docint.service';
import { TipodocintService } from '../../../service/tipodocint/tipodocint.service';
import { Tipodocint } from 'src/app/core/models/tipodocint';
import { Docint } from 'src/app/core/models/docint';
import { Ciclo } from 'src/app/core/models/ciclo';

@Component({
  selector: 'app-registrar-proyecto',
  templateUrl: './registrar-proyecto.component.html',
  styleUrls: ['./registrar-proyecto.component.css']
})

export class RegistrarProyectoComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort)sort: MatSort = new MatSort;

  proyectoForm : FormGroup =new FormGroup({});

  tipospy:Tipopy[] =[];
  proyectos: Proyecto[]=[];
  semestres: Semestre[]=[];
  facultades: Facultad[]=[];
  esp: Ep[]=[];
  ciclos: Ciclo[]=[];

  tiposdocint:Tipodocint[] =[];
  docsint: Docint[]=[];
  dataSource!: MatTableDataSource<any>;

  constructor(
    public fb:FormBuilder,
    public tipopyService:TipopyService,
    public proyectoService: ProyectoService,
    public semestreService: SemestreService,
    public facultadService: FacultadService,
    public epService: EpService,
    public cicloService: CicloService,
    public tipodocintService:TipodocintService,
    public docintService: DocintService,
    public dialog: MatDialog,
    private datePipe: DatePipe
  ){

  }
  ngOnInit() {
    this.proyectoForm = this.fb.group ({
      id: [''],
      nombre:['', Validators.required],
      ep:['', Validators.required],
      tipopro:['', Validators.required],
      fechaini:['', Validators.required],
      fechafin:['', Validators.required],
      pbeneficiaria:['', Validators.required],
      zintervencion:['', Validators.required],
      responsable:['', Validators.required],
      descripcion:['', Validators.required],
      objetivo:['', Validators.required],
      presupuesto:['', Validators.required],
      docint:['', Validators.required],
      semestre:['', Validators.required],
      estado:[''],
      facultad:[''],
      tipodocint:[''],
    });

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
    this.facultadService.getallFacultades().subscribe(resp =>{
      this.facultades = resp;
    },
      error => { console.error(error) }
    )
    this.cicloService.getallCiclos().subscribe(resp =>{
      this.ciclos = resp;
    },
      error => { console.error(error) }
    )
    this.tipodocintService.getalltiposdocint().subscribe(resp => {
      this.tiposdocint = resp;

      //console.log(resp);
    },
      error => { console.error(error) }
    )
    this.proyectoForm.get('tipodocint')?.valueChanges.subscribe(tipoId => {
      console.log(tipoId.id)
      if (tipoId) {
        this.docintService.getDocintByTipo(tipoId.id).subscribe(docInts => {
          this.docsint = docInts;
          console.log(docInts)
        });
      } else {
        // Limpiar la lista de documentos internos si no se ha seleccionado un tipo
        this.docsint = [];
      }
    });
    this.proyectoForm.get('facultad')?.valueChanges.subscribe(facultadid => {
      //console.log(facultadid.id)
      if (facultadid) {
        this.epService.getEpbyFacu(facultadid.id).subscribe(resp => {
          this.esp = resp;
          console.log(resp)
        });
      } else {
        // Limpiar la lista de documentos internos si no se ha seleccionado un tipo
        this.esp = [];
      }
    });
  }

  setDataAndPagination(){
    this.dataSource = new MatTableDataSource(this.proyectos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
