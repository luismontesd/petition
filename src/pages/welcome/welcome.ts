import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) { }

  openlogin() {
    this.navCtrl.push('LoginPage');
  }

  opensignup() {
    this.navCtrl.push('SigninPage');
  }
}

