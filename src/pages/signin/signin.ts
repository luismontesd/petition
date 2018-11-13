import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../models/user/user.model';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  
  user: User = {
    email: '',
    password: '',
  }
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastService) {
  }

  async doRegister(user: User){
    try{
      await this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password);
      this.toast.show(user.email +  ' Se ha registrado con exito!');
      this.navCtrl.setRoot('AddProfilePage');
    }
    catch (e){
      this.toast.show(e);
    }
  }

}
