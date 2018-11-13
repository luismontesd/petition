import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



/* Import pages */
import { HomePage } from '../pages/home/home';
import { FirstRunPage } from '../pages'
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = FirstRunPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    //Genera los items del menu
    this.pages = [
      { title: 'Inicio', component: HomePage, icon: 'map'},
      { title: 'Paseos', component: 'IndexPaseoPage', icon: 'navigate'},
      { title: 'Perros', component: 'IndexDogPage', icon: 'paw' },
      { title: 'Pago', component: HomePage, icon: 'card' },
      { title: 'Perfil', component: ProfilePage, icon: 'person'},
      { title: 'Ayuda', component: ProfilePage, icon: 'help-circle' },
      { title: 'Cerrar Sesion', component: LoginPage, icon: 'log-out' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
