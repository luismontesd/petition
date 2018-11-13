import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';



@Injectable()

export class ToastService {

    constructor(private toastCrtl: ToastController) {}
        show(message: string, duration: number = 4000){

            return this.toastCrtl.create({
                message,
                duration
            }).present();

        }
}