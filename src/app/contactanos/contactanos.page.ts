import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.page.html',
  styleUrls: ['./contactanos.page.scss'],
})
export class ContactanosPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  
  async doFacebook(){
    const alert = await this.alertController.create({
      cssClass: 'backColorFacebook',
      header: 'Alerta',
      subHeader: 'Facebook',
      message: 'Estas a punto de salir de la aplicación ¿deseas coninuar?',
      buttons: ['Cancel', 'OK']
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  async doInstagram(){
    const alert = await this.alertController.create({
      cssClass: 'backColorInstagram',
      header: 'Alerta',
      subHeader: 'Instagram',
      message: 'Estas a punto de salir de la aplicación ¿deseas coninuar?',
      buttons: ['Cancel', 'OK']
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  async doTwitter(){
    const alert = await this.alertController.create({
      cssClass: 'backColorTwitter',
      header: 'Alerta',
      subHeader: 'Twitter',
      message: 'Estas a punto de salir de la aplicación ¿deseas coninuar?',
      buttons: ['Cancel', 'OK']
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  async doYoutube(){
    const alert = await this.alertController.create({
      cssClass: 'backColorYoutube',
      header: 'Alerta',
      subHeader: 'Youtube',
      message: 'Estas a punto de salir de la aplicación ¿deseas coninuar?',
      buttons: ['Cancel', 'OK']
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  async doUes(){
    const alert = await this.alertController.create({
      cssClass: 'backColorUes',
      header: 'Alerta',
      subHeader: 'UES',
      message: 'Estas a punto de salir de la aplicación ¿deseas coninuar?',
      buttons: ['Cancel', 'OK']
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }


  // async doAlert2(){
  //   const alert = await this.alertController.create({
  //     cssClass: 'backColorTwitter',
  //     header: 'Login',
  //     message: 'Ingresa tu usuario: ',
  //     inputs:[{
  //       name:'Nombre',
  //       placeholder:'Nombre'
  //     },{
  //       name:'Contrasena',
  //       type:'password',
  //       placeholder:'Contraseña'
  //     }],
  //     buttons : [{
  //       text:'Cancelar',
  //       handler: data=>{
  //         console.log('Se ha cancelado');
  //       }
  //     },{
  //       text:'Guardar',
  //       handler:data=>{
  //         console.log('Se ha guardado el registro');

  //       }
  //     }]
  //   });

  //   await alert.present();
  //   const { role } = await alert.onDidDismiss();

  // }

  // async doAlertCheckbox(){
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Checkbox',
  //     message: 'Ingresa tu usuario: ',
  //     inputs:[{
  //       name:'checkBox1',
  //       type: 'checkbox',
  //       label:'CheckBox 1',
  //       value:'value1',
  //       handler:data=>{
  //         console.log("Cheack Box 1 seleccionado");
  //       },
  //       checked:false,
  //     },{
  //       name:'checkBox2',
  //       type:'checkbox',
  //       label:'CheckBox 2',
  //       value:'value2',
  //       handler:data=>{
  //         console.log('Cheack Box 2 seleccionado');
  //       },
  //       checked:false
  //     }],
  //     buttons : ['Ok','Cancel']
  //   });

  //   await alert.present();
  // }

}
