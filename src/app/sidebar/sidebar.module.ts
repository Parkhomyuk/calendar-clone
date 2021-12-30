import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarMainComponent } from './sidebar-main/sidebar-main.component';



@NgModule({
  declarations: [
    SidebarMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarMainComponent
  ]
})
export class SidebarModule { }
