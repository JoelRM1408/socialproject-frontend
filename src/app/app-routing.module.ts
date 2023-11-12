import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=>import('./modules/auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:'modules',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path:'home/sidebar',
    loadChildren: () => import('./modules/modules-sidebar/home-sidebar/home-sidebar.module').then(m => m.HomeSidebarModule),
  },
  {
    path:'home/coordinador',
    loadChildren: () => import('./modules/modules-sidebar/portal-coordinador/portal-coordinador.module').then(m => m.PortalCoordinadorModule),
  },
  {
    path:'home/alumno',
    loadChildren: () => import('./modules/modules-sidebar/portal-alumno/portal-alumno.module').then(m => m.PortalAlumnoModule),
  },
  {
    path:'home/reportes',
    loadChildren: () => import('./modules/modules-sidebar/reportes/reporte.module').then(m => m.ReporteModule),
  },
  {
    path:'home/configuracion',
    loadChildren: () => import('./modules/modules-sidebar/configuracion/configuracion.module').then(m => m.ConfiguracionModule),
  },
  {
    path:'home/seguridad',
    loadChildren: () => import('./modules/modules-sidebar/seguridad/seguridad.module').then(m => m.SeguridadModule),
  },
  {
    path:'**',
    redirectTo:'auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
