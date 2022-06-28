import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ConocenosPageModule } from '../conocenos/conocenos.module';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'conocenos',
        loadChildren: () => import('../conocenos/conocenos.module').then(m=>m.ConocenosPageModule)
      },
      {
        path: 'oferta-educativa',
        loadChildren: () => import('../oferta-educativa/oferta-educativa.module').then( m => m.OfertaEducativaPageModule)
      },
      {
        path: 'alumnos',
        loadChildren: () => import('../alumnos/alumnos.module').then( m => m.AlumnosPageModule)
      },
      {
        path: 'profesores',
        loadChildren: () => import('../profesores/profesores.module').then( m => m.ProfesoresPageModule)
      },
      {
        path: 'academia',
        loadChildren: () => import('../academia/academia.module').then( m => m.AcademiaPageModule)
      },
      {
        path: 'contactanos',
        loadChildren: () => import('../contactanos/contactanos.module').then( m => m.ContactanosPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
