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
          path: 'portal-alumno',
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
