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
import { ModalvistaComponent } from '../modalvista/modalvista.component';
import { ModaleditarComponent } from '../modaleditar/modaleditar.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-documento-intervencion',
  templateUrl: './documento-intervencion.component.html',
  styleUrls: ['./documento-intervencion.component.css']
})
export class DocumentoIntervencionComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild(MatSort)sort: MatSort = new MatSort;


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
    public dialog: MatDialog,
    private datePipe: DatePipe
  ){

  }
  ngOnInit() {
    this.docintService.getalldocsint().subscribe(resp => {
      this.docsint = resp;
      this.setDataAndPagination();
    });
    this.sharedDataService.docintForm.subscribe(data => {
    });
    this.tipodocintService.getalltiposdocint().subscribe(resp => {
      this.tiposdocint = resp;

      //console.log(resp);
    },
      error => { console.error(error) }
    )
  }





  eliminar(Docint: { id: number }) {
    // Realiza la eliminación de forma optimista en la vista
    const libroIndex = this.docsint.findIndex(d => d.id === Docint.id);
    if (libroIndex !== -1) {
      this.docsint.splice(libroIndex, 1);
    }
    this.docintService.deletedocint(Docint.id).subscribe(resp => {
    });
    this.setDataAndPagination();
  }

  editar2(docint: Docint) {
    console.log('doc a editar:', docint);

    const DocintId = docint.id;

    if (DocintId !== undefined) {
      const docintEditadoData = {
        id: docint.id,
        nombre: docint.nombre,
        representante: docint.representante,
        institucion: docint.institucion,
        distrito: docint.distrito,
        categoria: docint.categoria,
        fechaini: docint.fechaini,
        fechafin: docint.fechafin,
        estado:docint.estado,
        urldoc: docint.urldoc,
        tipodocint: docint.tipodocint
      };

      // const casopropuestoForm = this.sharedDataService.getCasopropuestoFormValue();
      // casopropuestoForm.patchValue(libroEditadoData);

      // Actualizar el formulario compartido
      this.sharedDataService.updatedocintForm(docintEditadoData);

      this.docintService.editardocint(DocintId, this.sharedDataService.getdocintFormValue()).subscribe(editedocint => {
        console.log('docint editado:', editedocint);

        // Recargar todos los libros después de editar
        this.docintService.getalldocsint().subscribe(updatedocint => {
          console.log('docint actualizados:', updatedocint);

          this.docsint = updatedocint;
          this.setDataAndPagination();
        });
      });
    } else {
      console.error('El ID del libro es undefined. No se puede realizar la edición.');
    }
  }

  editar(docint: Docint) {
    // const docintCopy: Docint = { ...docint };

    const fechainiString = docint.fechaini;
    const fechafinString = docint.fechafin;

    const partesFechaini = fechainiString.split('/');
    const partesFechafin = fechafinString.split('/');
    const fechaJSini = new Date(+partesFechaini[2], +partesFechaini[1]- 1, +partesFechaini[0]);
    const fechaJSfin = new Date(+partesFechafin[2], +partesFechafin[1]- 1, +partesFechafin[0]);

    const datePipe = new DatePipe('en-US');


    const fechaFormateadaini = datePipe.transform(fechaJSini, 'yyyy-MM-dd');

    const fechaFormateadafin = datePipe.transform(fechaJSfin, 'yyyy-MM-dd');

    // console.log(docint.fechaini)
    // console.log(docint.fechafin)

    const docintConFechasFormateadas = {
      ...docint,
      fechaini: fechaFormateadaini,
      fechafin: fechaFormateadafin,
    };

    console.log('doc a editar:', docint);
    const dialogRef = this.dialog.open(ModaleditarComponent, {
      data: docintConFechasFormateadas,
      width: '70%', // Ajusta el ancho según sea necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Si result es true, significa que se guardaron cambios. Puedes refrescar los datos según tu lógica.
        this.refreshData();
      }
    });
  }

  private refreshData(): void {
    this.docintService.getalldocsint().subscribe(updatedocint => {
      this.docsint = updatedocint;
      this.setDataAndPagination();
    });
  }



  setDataAndPagination(){
    this.dataSource = new MatTableDataSource(this.docsint);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ver(Docint: { id: any }): void  {
    const dialogRef = this.dialog.open(ModalvistaComponent, {
      data: { docintId: Docint.id },
      width: '25%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

