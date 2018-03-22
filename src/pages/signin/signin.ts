import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
   nom : string;
   prenom: string;
   email: string;
   password: string;
   confpassword: string;
   
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    
  }

  private valideAction(){
    if(this.password != this.confpassword){
      let alert = this.alertCtrl.create({
        title: 'Sécurité',
        subTitle: "Le mot de passe confirmé n'est pas le même!",
        buttons: ['Ok']
      });
      alert.present();
    }
    else if(this.nom && this.prenom && this.email && this.password){

      //sauvegarde dans la base de données

      //redirection dans la page de connexion
      this.navCtrl.push(LoginPage, {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email
      });

    }else{
      let alert = this.alertCtrl.create({
        title: 'Remplissage',
        subTitle: "Veillez à bien remplir tous les champs!",
        buttons: ['Ok']
      });
      alert.present();
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

}
