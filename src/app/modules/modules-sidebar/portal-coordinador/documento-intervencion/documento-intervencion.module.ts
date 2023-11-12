import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentoIntervencionRoutingModule } from './documento-intervencion-routing.module';
import { DocumentoIntervencionComponent } from './pages/documento-intervencion/documento-intervencion.component';


@NgModule({
  declarations: [
    DocumentoIntervencionComponent
  ],
  imports: [
    CommonModule,
    DocumentoIntervencionRoutingModule
  ]
})
export class DocumentoIntervencionModule { }
