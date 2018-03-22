import { Component } from '@angular/core';
import { NavController, NavParams, Nav, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private nav: Nav, private alertCtrl: AlertController) {
    this.email = navParams.get("email");
    console.log(this.email);
  }

  ionViewWillEnter() {
    this.nav.swipeBackEnabled = false;
    console.log("entrer");
 }
 
 ionViewWillLeave() {
  this.nav.swipeBackEnabled = true;
  console.log("quitter ");
}


}
