import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

export interface Slide {
  title: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  constructor(public navCtrl: NavController, public menu: MenuController, public platform: Platform) {
    this.dir = platform.dir();

        this.slides = [
          {
            title: "La app que tu perro estaba esperando",
            image: 'assets/img/slide1.png',
          },
          {
            title: "Pago Sencillo desde tu Smartphone",
            image: 'assets/img/slide2.png',
          },
          {
            title: "Seguimiento GPS durante el Paseo",
            image: 'assets/img/slide3.png',
          },
          {
            title: "Paseadores Certificados",
            image: 'assets/img/slide4.png',
          }
        ];
  }

  startApp() {
    this.navCtrl.setRoot('WelcomePage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
