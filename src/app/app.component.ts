import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController) {}
  locationMenu:string='Conocenos';


  toogleMenu(_page:string){
    this.locationMenu=_page;
    this.menu.toggle();
  }

}
