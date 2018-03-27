import React from "react";

import {observable} from 'mobx';
import Firebase from "./firebase.js";
import * as firebase from "firebase";
import ScreenSix from './ScreenSix.js';

class FireStore {

    @observable register = {
        firstName:null,
        lastName:null,
        name:null,
        email:null,
        password:null,
        phoneNumber:null,
    }

    @observable Login = {
        email:null,
        password:null,
    }

    @observable welcome = false;



    async registerFirebase(email,password){
        try{

            Firebase.auth.createUserWithEmailAndPassword(email,password)
        }
        catch(error){
            console.log(error.toString())
        }


    }

    async signIn(email,password){
        try{
            await  Firebase.auth.signInWithEmailAndPassword(email, password);
        }
        catch(error){
            console.log(error.toString())

        }
    }
    async Auth(){

        try{
            Firebase.auth.onAuthStateChanged(function(user) {
                if (user) {
                 this.welcome = true;
                 return (<ScreenSix/>)
                }
                else{
                    alert("please make a user")
                }
              });
        }
        catch(error){
            alert(error)
        }
    }

    async logout() {

        try {
    
            await Firebase.auth.signOut();
    
            // Navigate to login view
    
        } catch (error) {
            console.log(error);
        }
    
    }





}


export default new FireStore(); 