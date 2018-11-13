import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Dog } from '../../models/dog/dog.model';
import { DogListService } from '../../services/dog-list/dog-list-service';
import { ToastService } from '../../services/toast/toast.service';


@IonicPage()
@Component({
  selector: 'page-add-dog',
  templateUrl: 'add-dog.html',
})
export class AddDogPage {


  dog: Dog = {
    nombre: '',
    edad: '',
    sexo: '',
    temperamento: '',
    convive: '',
    tamano: '',
    seSienta: '',
    haceCaso: '',
    caminaJunto: '',
    comentarios: '',
  }
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private dogService: DogListService,
    private toast: ToastService) {
  }

  addDog(dog: Dog){
    this.dogService.addDog(dog).then(ref =>{
      this.toast.show(dog.nombre +  ' Se ha creado con exito!');
      this.navCtrl.setRoot('IndexDogPage', { key: ref.key});
    });

  }
}
