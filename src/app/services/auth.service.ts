import { Injectable, NgZone } from '@angular/core';
import {  signInAnonymously, Auth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../shared/interfaces/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from '@angular/fire/compat/firestore';
import { Database } from '@angular/fire/database'; 
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { RegisterRequestInterface } from '../auth/models/registerRequestUser.interface';
import {from} from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData?: any;
  private itemsCollection?: AngularFirestoreCollection<User>;
  constructor(
    public authUser: AngularFireAuth,
    public afs: AngularFirestore,
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
     
  ) {
    //This is importent for dashboard list of users 
    // this.itemsCollection = afs.collection<User>('users');
    // console.log('this.itemsCollection', this.itemsCollection);
    // this.itemsCollection.get().subscribe(data=>{
    //   console.log('data of users', data);
    //   data.forEach((doc) => {
    //     console.log(doc.id, "=>", doc.data());
    //  })
    // })
      // this.authUser.authState.subscribe(user=>{
      //   console.log('authState =>user', user);
      //   if(user){
      //     this.userData=user;
      //     localStorage.setItem('user', JSON.stringify(this.userData));
          
      //   }
      //   else{
      //     const person = {
      //       name: "",
      //       password: "",
      //   }
      //     localStorage.setItem('user', JSON.stringify(person));
      //     //JSON.parse(localStorage.getItem('user'));
      //   }
      // })


   }

  // SignIn(email: string, password: string){
  //   return this.authUser.signInWithEmailAndPassword(email, password)
  //     .then((result=>{
  //       this.ngZone.run(()=>{
  //         this.router.navigate([''])
  //       });
  //       this.SetUserData(result.user)
  //     })
  //     ).catch((error)=>{
  //       window.alert(error.message)
  //     })
  // } 
  
  // SignUp(request: RegisterRequestInterface) {
  //   return this.authUser.createUserWithEmailAndPassword(request.email, request.password)
  //     .then((result) => {
  //       /* Call the SendVerificaitonMail() function when new user sign 
  //       up and returns promise */
  //     //  this.SendVerificationMail()
  //      console.log('Result', result)
  //       this.SetUserData(result.user);
  //       this.ngZone.run(()=>{
  //         this.router.navigate([''])
  //       });
         
  //     }).catch((error) => {
  //       window.alert(error.message)
  //     })
  // }
  SignUp2(request: RegisterRequestInterface){
    return from(this.authUser.createUserWithEmailAndPassword(request.email, request.password))
  }
   
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }

    console.log('userData', userData)
    console.log('userRef', userRef)
    
    return userRef.set(userData)
  }
  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.authUser.currentUser 
    .then(u => { u!.sendEmailVerification()
    //  this.router.navigate(['verify-email-address']);
    }).then(() => {//  this.router.navigate(['verify-email-address']);})
  })
}
  ForgotPassword(passwordResetEmail: string){
    return this.authUser.sendPasswordResetEmail(passwordResetEmail)
      .then(()=>{
        window.alert('Password reset email sent, check your inbox')
      }).catch((error)=>{
        window.alert(error)
      })
  }
  SignOut(){
    return this.authUser.signOut().then(()=>{
      localStorage.removeItem('user');
      this.router.navigate(['auth/signin'])
    })
  }
  
}

