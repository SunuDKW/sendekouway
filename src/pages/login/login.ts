import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: string;
  password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  	
  }

  private valideAction(){
    //Authentifier

    //redirection dans la page d'accueil
    this.navCtrl.push(HomePage, {
      email: this.email
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
