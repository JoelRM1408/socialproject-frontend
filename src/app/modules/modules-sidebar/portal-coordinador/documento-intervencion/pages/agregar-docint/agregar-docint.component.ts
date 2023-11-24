import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


import { TipodocintService } from '../../../service/tipodocint/tipodocint.service';
import { DocintService } from '../../../service/docint/docint.service';
import { Tipodocint } from 'src/app/core/models/tipodocint';
import { Docint } from 'src/app/core/models/docint';
import { DatePipe } from '@angular/common';
import { SharedDataService } from '../../shared/shared-data.service';

@Component({
  selector: 'app-agregar-docint',
  templateUrl: './agregar-docint.component.html',
  styleUrls: ['./agregar-docint.component.css']
})
export class AgregarDocintComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort)sort: MatSort = new MatSort;

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const selectedFile = inputElement.files[0];
      // Aquí puedes manejar el archivo seleccionado, por ejemplo, enviarlo a un servidor.
      console.log(selectedFile);
    }
  }

  docintForm : FormGroup =new FormGroup({});

  tiposdocint:Tipodocint[] =[];
  docsint: Docint[]=[];
  dataSource!: MatTableDataSource<any>;

  displayedColumns: string[] = ['id', 'nombredocint', 'tipo', 'fechaini', 'fechafin', 'estado', 'doc','acciones']

  constructor(
    public fb:FormBuilder,
    public tipodocintService:TipodocintService,
    public docintService: DocintService,
    private sharedDataService: SharedDataService,

    private datePipe: DatePipe
  ){

  }

  ngOnInit() {

    this.docintForm = this.fb.group ({
      id: [''],
      nombre:['', Validators.required],
      distrito:['', Validators.required],
      representante:['', Validators.required],
      institucion:['', Validators.required],
      categoria:['', Validators.required],
      fechaini:['', Validators.required],
      fechafin:['', Validators.required],
      estado:[''],
      urldoc:['', Validators.required],
      tipodocint:['', Validators.required],
    });

    this.sharedDataService.docintForm.subscribe(data => {
      // Actualiza tu formulario con los datos recibidos
      this.docintForm.patchValue(data);
    });

    this.docintForm.get('fechaini')?.valueChanges.subscribe(() => this.actualizarEstado());
    this.docintForm.get('fechafin')?.valueChanges.subscribe(() => this.actualizarEstado());

    this.docintService.getalldocsint().subscribe(resp => {
      this.docsint = resp;
      this.setDataAndPagination();

      //console.log(resp);
    },
      error => { console.error(error) }
    )
    this.tipodocintService.getalltiposdocint().subscribe(resp => {
      this.tiposdocint = resp;

      //console.log(resp);
    },
      error => { console.error(error) }
    )

  }



  guardar(): void {
    console.log(this.docintForm.value);

    const docintId = this.docintForm.value.id;
    const nuevodocint = this.docintForm.value;
    nuevodocint.fechaini = this.datePipe.transform(nuevodocint.fechaini, 'dd/MM/yyyy');
    nuevodocint.fechafin = this.datePipe.transform(nuevodocint.fechafin, 'dd/MM/yyyy');
    // Formatea la fecha
    // console.log('Fecha de inicio formateada:', nuevodocint.fechaini);
    // console.log('Fecha de fin formateada:', nuevodocint.fechafin);
    if (docintId) {
      // Si existe un ID, significa que estamos editando
      this.docintService.editardocint(docintId, nuevodocint).subscribe(resp => {
        this.docintForm.reset();
        this.docsint = this.docsint.filter(docint => resp.id !== docint.id);
        this.docsint.push(resp);
        this.setDataAndPagination();
      }, error => {
        console.error(error);
      });
    } else {
      // Si no existe un ID, significa que estamos creando uno nuevo
      this.docintService.savedocint(nuevodocint).subscribe(resp => {
        this.docintForm.reset();
        this.docsint.push(resp);
        this.setDataAndPagination();
      }, error => {
        console.error(error);
      });
    }
  }

  // eliminar(docint: { id: any }) {
  //   // Realiza la eliminación de forma optimista en la vista
  //   const libroIndex = this.docsint.findIndex(d => d.id === docint.id);
  //   if (libroIndex !== -1) {
  //     this.docsint.splice(libroIndex, 1);
  //   }
  //   this.docintService.deletedocint(docint.id).subscribe(resp => {
  //   });
  //   this.setDataAndPagination();
  // }

  // editar(docint: Docint){
  //   console.log('Libro a editar:', docint);

  //   this.docintForm.setValue({
  //     id: docint.id,
  //     nombre: docint.nombre,
  //     representante: docint.representante,
  //     institucion: docint.institucion,
  //     distrito: docint.distrito,
  //     categoria: docint.categoria,
  //     fechaini: docint.fechaini,
  //     fechafin: docint.fechafin,
  //     urldoc: docint.urldoc,
  //     tipodocint: docint.tipodocint
  //   })
  // }

  setDataAndPagination(){
    this.dataSource = new MatTableDataSource(this.docsint);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  actualizarEstado() {
    const fechaInicio = this.docintForm.get('fechaini')?.value;
    const fechaFin = this.docintForm.get('fechafin')?.value;
    const hoy = new Date();

    const hoyformateado = this.datePipe.transform(hoy, 'dd/MM/yyyy');
    const fechaInicioFormateada = this.datePipe.transform(fechaInicio, 'dd/MM/yyyy');
    const fechaFinFormateada = this.datePipe.transform(fechaFin, 'dd/MM/yyyy');
    console.log( "soy fecha hoy:", hoyformateado);
    console.log("soy fecha inicio:",fechaInicioFormateada);
    console.log("soy fecha fin:",fechaFinFormateada);

    if (fechaInicio && fechaFin && hoyformateado) {
      if (fechaInicioFormateada && fechaFinFormateada && hoyformateado) {
        if (fechaInicioFormateada <= hoyformateado && fechaFinFormateada >= hoyformateado) {
          this.docintForm.get('estado')?.setValue('vigente');
          console.log("vigente")
        } else {
          this.docintForm.get('estado')?.setValue('vencido');
          console.log("vencido")
        }
      }
    }
  }

}
