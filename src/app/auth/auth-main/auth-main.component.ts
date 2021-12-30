import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { RegisterRequestInterface } from '../models/registerRequestUser.interface';
import { registerStartAction } from '../store/actions/register.actions';

@Component({
  selector: 'cal-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrls: ['./auth-main.component.scss']
})
export class AuthMainComponent implements OnInit, AfterViewInit, OnDestroy {
   

  constructor(private renderer: Renderer2, private el: ElementRef,  private authService: AuthService, private store: Store, private subscription: SubscriptionService) { }
  
  

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log('this.el.nativeElement.children[0].firstElementChild.innerWidth', this.el.nativeElement.children[0].firstElementChild)
    this.renderer.setStyle(this.el.nativeElement,'position', 'absolute');
    this.renderer.setStyle(this.el.nativeElement,'top', window.innerHeight*0.25+'px');
    this.renderer.setStyle(this.el.nativeElement,'left', window.innerWidth*0.5-this.el.nativeElement.children[0].firstElementChild.offsetWidth/2 +'px');
  }

  // onSignUp(userName:string, password: string): void{
  //   this.authService.SignUp('auth1','password')
  // }
  onSignUp(): void{
    this.store.dispatch(registerStartAction({request:{email:'alexp102500@gamail.com', password:'password100800'}}))
    
    //this.store.dispatch(registerStartAction({}))
    //this.authService.SignUp('alexp45897523@gamail.com','password')
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribeComponent$.next();
  }
}
