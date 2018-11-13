import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Paseo } from '../../models/paseo/paseo.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import firebase from 'Firebase';
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: 'page-index-paseo',
  templateUrl: 'index-paseo.html',
})
export class IndexPaseoPage {

  user = firebase.auth().currentUser;
  paseoRef = this.db.list<Paseo>('paseos/'+this.user.uid);


  paseoList$: Observable<Paseo[]>;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private db: AngularFireDatabase) {


      this.paseoList$ = this.paseoRef
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key,
            ...c.payload.val()
          }));
        });
        

    }

}
