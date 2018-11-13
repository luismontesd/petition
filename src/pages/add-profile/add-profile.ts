import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../../services/profile/profile.service';
import { Geolocation } from '@ionic-native/geolocation';
import { Profile } from '../../models/user/profile.model';
import { ToastService } from '../../services/toast/toast.service';
import { HomePage } from '../home/home';


declare var google: any;

@IonicPage()
@Component({
  selector: 'page-add-profile',
  templateUrl: 'add-profile.html',
})
export class AddProfilePage {



  
  profile: Profile = {
    nombre: '',
    apellido: '',
    telefono: undefined,
    direccion: '',
    sexo: '',
    fecha: '',
    role: 'user',
    latitude: undefined,
    longitude: undefined
  }
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastService,
    private profileService: ProfileService,
    public geolocation: Geolocation) {

      this.geolocation.getCurrentPosition().then((resp) => {
        new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
        this.profile.latitude = resp.coords.latitude;
        this.profile.longitude = resp.coords.longitude;
      });
  }

    addProfile(profile: Profile){
    this.profileService.addProfile(profile).then(ref =>{
      this.toast.show(profile.nombre +  ' Se ha registrado con exito!');
      this.navCtrl.setRoot(HomePage);
    });

  }

}
