import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SigninPage } from '../signin/signin';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  login_page: any;
  signin_page: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.login_page = LoginPage;
    this.signin_page = SigninPage;
  }

}
