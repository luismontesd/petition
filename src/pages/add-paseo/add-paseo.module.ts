import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPaseoPage } from './add-paseo';

@NgModule({
  declarations: [
    AddPaseoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPaseoPage),
  ],
})
export class AddPaseoPageModule {}
