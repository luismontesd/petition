import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Dog } from '../../models/dog/dog.model';
import { DogListService } from '../../services/dog-list/dog-list-service';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-edit-dog',
  templateUrl: 'edit-dog.html',
})
export class EditDogPage {

  dog: Dog;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private dogService: DogListService,
    private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.dog = this.navParams.get('dog');
    
  }

  saveDog(dog: Dog) {
    this.dogService.editDog(dog).then(() => {
      
      this.toast.show(dog.nombre +  ' se ha guardado!');
      this.navCtrl.setRoot('IndexDogPage');
    });
   }
   removeDog(dog: Dog){
    this.dogService.removeDog(dog).then(() => {
     this.toast.show(dog.nombre +  ' ha sido liminado!');
     this.navCtrl.setRoot('IndexDogPage');
    });

  }

}
