import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'Firebase';
import { Dog } from "../../models/dog/dog.model";

@Injectable()
export class DogListService{
    
    
    user = firebase.auth().currentUser;

    private dogListRef = this.db.list<Dog>('dogs/'+this.user.uid);
 

    
    constructor(private db: AngularFireDatabase){}
    
    getDogList(){
        return this.dogListRef;
    }
    addDog(dog: Dog){
        return this.dogListRef.push(dog);
    }
    editDog(dog: Dog){
        return this.dogListRef.update(dog.key, dog);

    }
    removeDog(dog:Dog){
        return this.dogListRef.remove(dog.key);

    }
}