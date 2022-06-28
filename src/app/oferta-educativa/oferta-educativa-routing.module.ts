import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfertaEducativaPage } from './oferta-educativa.page';
import { IngenieriasComponent } from './ingenierias/ingenierias.component';
import { MaestriasComponent } from './maestrias/maestrias.component';
import { LicenciaturasComponent } from './licenciaturas/licenciaturas.component';

const routes: Routes = [
  {
    path: '',
    component: OfertaEducativaPage,
    children:[
        // {
        //   path:'',
        //   component:LicenciaturasComponent
        // },
        {
          path:'ingenierias',
          component:IngenieriasComponent
        },{
          path:'maestrias',
          component:MaestriasComponent
        },{
          path:'licenciaturas',
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
