import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentoIntervencionComponent } from './pages/documento-intervencion/documento-intervencion.component';
import { AgregarDocintComponent } from './pages/agregar-docint/agregar-docint.component';

const routes: Routes = [
  {
    path:'listadocint',
    component: DocumentoIntervencionComponent,
  },
  {
    path:'agregardocint',
    component: AgregarDocintComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentoIntervencionRoutingModule { }
