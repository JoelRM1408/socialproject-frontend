import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSidebarAlumnoComponent } from './home-sidebar-alumno/home-sidebar-alumno.component';

const routes: Routes = [
  {
    path:'',
    component: HomeSidebarAlumnoComponent,
    children: [
      {
          path: 'welcome',
          loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomeModule)
        },
        {
          path: 'convenio',
          loadChildren: () => import('../convenios/convenios.module').then(m => m.ConveniosModule)
        },
        {
          path: 'proyecto',
          loadChildren: () => import('../proyecto/proyecto.module').then(m => m.ProyectoModule),
        },
        {
          path: 'docint',
          loadChildren: () => import('../portal-coordinador/portal-coordinador.module').then(m => m.PortalCoordinadorModule),
        },
        {
          path: 'equipo',
          loadChildren: () => import('../portal-alumno/portal-alumno.module').then(m => m.PortalAlumnoModule),
        },
        {
          path:'**',
          redirectTo:'welcome'
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeSidebarAlumnoRoutingModule { }
