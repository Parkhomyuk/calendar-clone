import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { DirectiveModule } from '../directives/directives.module';
import { HeaderMainComponent } from './header-main/header-main.component';
import { RouterModule, Routes } from '@angular/router';
 



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMainComponent
  ],
  imports: [
    CommonModule,
    DirectiveModule,
    RouterModule
  ],
  exports:[
    HeaderMainComponent
  ]
})
export class HeaderModule { }
