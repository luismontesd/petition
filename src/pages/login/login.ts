import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user/user.model';
import { ToastService } from '../../services/toast/toast.service';
import { HomePage } from '../home/home';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User = {
    email: '',
    password: '',
  }
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastService) {
  }



 async doLogin(user: User){
    try {
    const result = await this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password);
    if(result){
      this.navCtrl.setRoot(HomePage);
      this.toast.show('Bienvenido de nuevo '+ user.email);
      }
    } catch (e){
      this.toast.show(e);
    }
  }

}
