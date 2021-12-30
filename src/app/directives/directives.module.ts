import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaStylingDirective } from './media-styling.directive';
 



@NgModule({
  declarations: [
    MediaStylingDirective
  ],
  imports: [
    CommonModule,
   
  ],
  exports:[
    MediaStylingDirective
  ]
})
export class DirectiveModule { }
