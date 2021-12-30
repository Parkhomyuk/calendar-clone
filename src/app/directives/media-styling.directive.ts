import { AfterViewChecked, Directive, ElementRef, Renderer2 } from '@angular/core';
import { WindowProperties } from './window.model';

@Directive({
  selector: '[appMediaStyling]'
})
export class MediaStylingDirective implements AfterViewChecked {
  private windowSize: WindowProperties;
  constructor(private el: ElementRef, private renderer: Renderer2) { 
    this.windowSize= new WindowProperties()
   }
  ngAfterViewChecked(): void {    
    console.log('windows width', window);
    console.log('screen.orientation', screen.orientation);
    this.windowSize.setWidth(window.innerWidth);
    this.windowSize.setHeight(window.innerHeight);
    this.renderer.setStyle(this.el.nativeElement, 'width', this.windowSize.getWidth+'px')
    this.renderer.setStyle(this.el.nativeElement, 'height', 48+'px')
  }

}
