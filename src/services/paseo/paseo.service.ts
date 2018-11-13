import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'Firebase';
import { Paseo } from "../../models/paseo/paseo.model";

@Injectable()
export class PaseoService{
    
    
    user = firebase.auth().currentUser;

    private paseoRef = this.db.list<Paseo>('paseos/'+this.user.uid);
 
    constructor(private db: AngularFireDatabase){}
    
    getPaseo(){
        return this.paseoRef;
    }

    addPaseo(paseo: Paseo){
        return this.paseoRef.push(paseo);
    }
   
}