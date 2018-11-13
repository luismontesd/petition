import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectDogPage } from './select-dog';

@NgModule({
  declarations: [
    SelectDogPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectDogPage),
  ],
})
export class SelectDogPageModule {}
