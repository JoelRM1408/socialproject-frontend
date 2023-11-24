import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Docint } from 'src/app/core/models/docint';
import { DocintService } from '../../../service/docint/docint.service';

@Component({
  selector: 'app-modalvista',
  templateUrl: './modalvista.component.html',
  styleUrls: ['./modalvista.component.css']
})
export class ModalvistaComponent {
  docint: Docint| undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private docintService: DocintService
  ) {
    // `data` debería contener el ID del documento de intervención
    const docintId = data.docintId;

    if (docintId) {
      // Utiliza el servicio para obtener la información del documento por su ID
      this.docintService.getDocintById(docintId).subscribe(
        (response) => {
          this.docint = response;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

}
