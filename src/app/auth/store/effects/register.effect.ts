import { Injectable, NgZone, OnDestroy } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import {createEffect, Actions, ofType} from '@ngrx/effects';
import { Action, Store } from "@ngrx/store";
import { Observable, of, Subscription } from "rxjs";
import { map, switchMap, catchError,  tap, takeUntil, mergeMap} from "rxjs/operators";
import { AuthService } from "src/app/services/auth.service";
import { SubscriptionService } from "src/app/services/subscription.service";
import { User } from "src/app/shared/interfaces/user";
import { threadId } from "worker_threads";
import { AuthStateInterface } from "../../models/auth.state.interface";
import { Router } from "@angular/router";
import { registerFailureAction, registerStartAction, registerSuccessAction } from "../actions/register.actions";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable()
export class RegisterEffect implements OnDestroy{
    
     
    subscriptionLS$= new Subscription();
    userData?: any;
     
    register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerStartAction),
      switchMap((request) => {
          console.log('register start', request)
        return this.authService.SignUp2(request.request).pipe(
          map((currentUser: any) => {
              console.log('currentUser', currentUser)
              
            this.SetUserData(currentUser)
            const userData: User = {
                uid: currentUser.user.uid,
                email: currentUser.user.email,
                displayName: 'displam',
                photoURL: '',
                emailVerified: currentUser.user.emailVerified
              }
              takeUntil(this.subService.unsubscribe$)
              this.ngZone.run(() => {
                this.router.navigate(['']);
              });
            return registerSuccessAction({user:userData})
          }),

          catchError((error) => {
              console.log('error fao', error)
            return of(
              registerFailureAction()
            )
          })
        )
      })
    )
  )
    constructor(private actions$: Actions, private authService: AuthService, 
                public afs: AngularFirestore,  private store: Store<AuthStateInterface>, 
                private subService: SubscriptionService,public ngZone: NgZone,
                public router: Router, public authUser: AngularFireAuth, 
                ){
                /* Saving user data in localstorage when   logged in and setting up null when logged out */
                    this.subscriptionLS$=this.authUser.authState.subscribe(user => {
                        if (user) {
                        this.userData = user;
                        localStorage.setItem('user', JSON.stringify(this.userData));
                        //JSON.parse(localStorage.getItem('user'));
                        } else {
                        //localStorage.setItem('user', {});
                        localStorage.removeItem('user')
                      //  JSON.parse(localStorage.getItem('user'));
                        }
                    })
                }
    
    SetUserData(user: any) {
        console.log('userfrom props', user.user.uid)
        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.user.uid}`);
        const userData: User = {
          uid: user.user.uid,
          email: user.user.email,
          displayName: 'displam',
          photoURL: '',
          emailVerified: user.user.emailVerified
        }
    
        console.log('userData', userData)
        console.log('userRef', userRef)
        
        return userRef.set(userData)
      } 
      
    createUserData(user: any) {
        
        const userData: User = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified
        }
    
         
        return userData;
      }
      ngOnDestroy(): void {
        this.subscriptionLS$.unsubscribe()
   }
}

 

