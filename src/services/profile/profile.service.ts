import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import * as firebase from 'Firebase';
import { Profile } from "../../models/user/profile.model";

@Injectable()

export class ProfileService{

    user = firebase.auth().currentUser;
    
    private profileRef = this.db.list<Profile>('users/'+this.user.uid);

    constructor(private db: AngularFireDatabase){
        
    }
    

    addProfile(profile: Profile){
        return this.profileRef.push(profile);
    }
    
}