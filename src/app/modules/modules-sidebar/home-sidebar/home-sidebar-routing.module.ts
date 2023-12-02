import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSidebarComponent } from './home-sidebar/home-sidebar.component';

const routes: Routes = [
  {
  path:'',
  component: HomeSidebarComponent,
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
        path: 'portal-coordinador',
        loadChildren: () => import('../portal-coordinador/portal-coordinador.module').then(m => m.PortalCoordinadorModule),
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
export class HomeSidebarRoutingModule { }
