import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentMainComponent } from './content-main/content-main.component';



@NgModule({
  declarations: [
    ContentMainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContentMainComponent
  ]
})
export class ContentModule { }
