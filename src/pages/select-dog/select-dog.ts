import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DogListService } from '../../services/dog-list/dog-list-service';
import { Dog } from '../../models/dog/dog.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Paseo } from '../../models/paseo/paseo.model';
import { PaseoService } from '../../services/paseo/paseo.service';
import { ToastService } from '../../services/toast/toast.service';
import * as firebase from 'Firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Profile } from '../../models/paseador/profile.model';




@IonicPage()
@Component({
  selector: 'page-select-dog',
  templateUrl: 'select-dog.html',
})
export class SelectDogPage {

  user = firebase.auth().currentUser;
  
  f=new Date();
  cad=this.f.getHours()+":"+this.f.getMinutes()+":"+this.f.getSeconds(); 

  paseo: Paseo = {
    user_id: this.user.uid,
    paseador_id: 'ue1t5q2x5SPahu6zmJ3JQy28Eu73',
    dog_id: '',
    hora_inicio: this.cad,
    hora_finalizado: '',
    status: 'Activo',
    nombre_paseador: 'Alejandro',
    apellido_paseador: 'Ramirez',
  }


  paseadorRef = this.db.list<Profile>('paseadores/');




  dogList$: Observable<Dog[]>;
  paseoList$: Observable<Profile[]>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private dogService: DogListService,
    private paseoService: PaseoService,
    private toast: ToastService,
    private db: AngularFireDatabase) {

      this.paseoList$ = this.paseadorRef
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val()
          }));
        });
        console.log(this.paseoList$);


      this.dogList$ = this.dogService
      .getDogList()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val()
          }));
        });
        console.log(this.dogList$);
  }


  addPaseo(paseo: Paseo){
    this.paseoService.addPaseo(paseo).then(ref =>{
      this.toast.show('Buscando paseador más cercano...');
      
      this.navCtrl.setRoot('IndexPaseoPage');
    });

  }
}