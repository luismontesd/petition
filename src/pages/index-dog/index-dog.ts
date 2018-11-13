import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DogListService } from '../../services/dog-list/dog-list-service';
import { Dog } from '../../models/dog/dog.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-index-dog',
  templateUrl: 'index-dog.html',
})
export class IndexDogPage {

  dogList$: Observable<Dog[]>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private dogService: DogListService) {
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
  }

}
