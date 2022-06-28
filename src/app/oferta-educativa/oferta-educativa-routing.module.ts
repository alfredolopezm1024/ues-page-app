import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicenciaturasComponent } from './LICENCIATURAS/licenciaturas.component';

import { OfertaEducativaPage } from './oferta-educativa.page';

const routes: Routes = [
  {
    path: '',
    component: OfertaEducativaPage,
    children:[
        {
          path:'licenciatura',
          component:LicenciaturasComponent
        }
      ]
    }
  
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertaEducativaPageRoutingModule {}
