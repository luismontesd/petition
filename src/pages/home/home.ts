import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


import 'rxjs/add/operator/map';



declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  map: any;
  markers:any;
  


  paseadores = [
  {
    nome: 'Rodolfo Perez',
    endereco: 'Endereço1',
    latitude: 20.5991317,
    longitude: -100.402084
  },
  {
    nome: 'Juan Hernandez',
    endereco: 'Endereço2',
    latitude: 20.5882775,
    longitude: -100.4112142
  }
  ,
  {
    nome: 'Alejandro Ramirez',
    endereco:  '',
    latitude: 20.710698,
    longitude:  -100.442381

  }];




  constructor(public navCtrl: NavController,
    public geolocation: Geolocation,
    public platform:Platform) {

      



  }

  ionViewWillEnter(){
    this.platform.ready().then(() => {
      this.initPage();
    });
  }

  initPage() {
    this.geolocation.getCurrentPosition().then(result => {
      this.loadMap(result.coords.latitude, result.coords.longitude);
      console.log(result.coords.latitude);
    });
  }


  private loadMap(lat, lng) {
      let latLng = new google.maps.LatLng(lat, lng);
    console.log(lng);
      let mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
      };

      let element = document.getElementById('map');

      this.map = new google.maps.Map(element, mapOptions);
      let marker = new google.maps.Marker({
        position: latLng,
        title: 'Mi ubicacion',
        icon: 'assets/img/userP.png'

      })
      let content = `
      <div id="myid"  class="item item-thumbnail-left item-text-wrap">
        <ion-item>
          <ion-row>
            <h6>`+marker.title+`</h6>
          </ion-row>
        </ion-item>
      </div>
      `
      ;
      this.addInfoWindow(marker, content);
      marker.setMap(this.map);

      this.loadPoints();
    }

    loadPoints() {
      this.markers = [];

      for (const key of Object.keys(this.paseadores)) {
        let latLng = new google.maps.LatLng(this.paseadores[key].latitude, this.paseadores[key].longitude);

        let marker = new google.maps.Marker({
          position: latLng,
          title: this.paseadores[key].nome,
          icon: 'assets/img/paseador.png'
        })

        let content = `
        <div id="myid"  class="item item-thumbnail-left item-text-wrap">
          <ion-item>
            <ion-row>
              <h6>`+this.paseadores[key].nome+`</h6>
            </ion-row>
          </ion-item>
        </div>
        `
        ;
        this.addInfoWindow(marker, content);
        marker.setMap(this.map);
      }

      return this.markers;
    }

    addInfoWindow(marker, content) {
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });

      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);

        google.maps.event.addListenerOnce(infoWindow, 'domready', () => {
          document.getElementById('myid').addEventListener('click', () => {
            this.goToEmpresa(marker)
          });
        });
      })
    }

    goToEmpresa(empresa) {
      alert('Click');
    }
}

