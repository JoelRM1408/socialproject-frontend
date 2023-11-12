import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentoIntervencionComponent } from './pages/documento-intervencion/documento-intervencion.component';

const routes: Routes = [
  {
    path:'',
    component: DocumentoIntervencionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentoIntervencionRoutingModule { }
