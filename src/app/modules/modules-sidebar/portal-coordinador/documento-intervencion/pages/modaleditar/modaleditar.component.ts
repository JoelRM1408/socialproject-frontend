import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipodocintService } from '../../../service/tipodocint/tipodocint.service';
import { Tipodocint } from 'src/app/core/models/tipodocint';
import { DocintService } from '../../../service/docint/docint.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modaleditar',
  templateUrl: './modaleditar.component.html',
  styleUrls: ['./modaleditar.component.css']
})
export class ModaleditarComponent {
  tiposdocint: Tipodocint[] = [];
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModaleditarComponent>,
    public tipodocintService: TipodocintService,
    public docintService: DocintService,
    private datePipe: DatePipe,


    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    // Inicializa el formulario con los datos existentes del documento de intervención
    this.editForm = this.fb.group({
      nombre: [data.nombre, Validators.required],
      representante: [data.representante, Validators.required],
      institucion: [data.institucion, Validators.required],
      distrito: [data.distrito, Validators.required],
      categoria: [data.categoria, Validators.required],
      fechaini: [data.fechaini, Validators.required],
      fechafin: [data.fechafin, Validators.required],
      estado: [data.estado],
      urldoc: [data.urldoc, Validators.required],
      tipodocint: [data.tipodocint, Validators.required],
    });

    this.tipodocintService.getalltiposdocint().subscribe(resp => {
      this.tiposdocint = resp;

      const tipodiSeleccionado = this.tiposdocint.find((tipodi) => tipodi.id === data.tipodocint.id);
      this.editForm.patchValue({ tipodocint: tipodiSeleccionado });
      //console.log(resp);
    },
      error => { console.error(error) }
    )
    this.editForm.get('fechaini')?.valueChanges.subscribe(() => this.actualizarEstado());
    this.editForm.get('fechafin')?.valueChanges.subscribe(() => this.actualizarEstado());
  }
  guardarcambios(): void {
    // Guarda los cambios y cierra el modal
    const editedocint = { ...this.data, ...this.editForm.value };
    editedocint.fechaini = this.datePipe.transform(editedocint.fechaini, 'dd/MM/yyyy') as string;
    editedocint.fechafin = this.datePipe.transform(editedocint.fechafin, 'dd/MM/yyyy') as string;
    this.docintService.editardocint(this.data.id, editedocint).subscribe(
      () => {
        this.dialogRef.close(true); // Indica que la edición fue exitosa
      },
      error => {
        console.error(error);
        // Maneja errores según tus necesidades
      }
    );
  }

  cerrar(): void {
    // Cierra el modal sin guardar cambios
    this.dialogRef.close(false);
  }

  actualizarEstado() {
    const fechaInicio = this.editForm.get('fechaini')?.value;
    const fechaFin = this.editForm.get('fechafin')?.value;
    const hoy = new Date();

    const hoyformateado = this.datePipe.transform(hoy, 'dd/MM/yyyy');
    const fechaInicioFormateada = this.datePipe.transform(fechaInicio, 'dd/MM/yyyy');
    const fechaFinFormateada = this.datePipe.transform(fechaFin, 'dd/MM/yyyy');
    console.log("hoy:",hoyformateado);
     console.log("ini:",fechaInicioFormateada);
     console.log("fin:",fechaFinFormateada);

    if (fechaInicio && fechaFin && hoyformateado) {
      if (fechaInicioFormateada && fechaFinFormateada && hoyformateado) {
        if (fechaInicioFormateada <= hoyformateado && fechaFinFormateada >= hoyformateado) {
          this.editForm.get('estado')?.setValue('vigente');
          console.log("vigente")
        } else {
          this.editForm.get('estado')?.setValue('vencido');
          console.log("vencido")
        }
      }
    }else {
      this.editForm.get('estado')?.setValue('vigente');
      console.log("vigente")
    }
  }
}


