import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditDogPage } from './edit-dog';

@NgModule({
  declarations: [
    EditDogPage,
  ],
  imports: [
    IonicPageModule.forChild(EditDogPage),
  ],
})
export class EditDogPageModule {}
