import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cal-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.scss']
})
export class ContentMainComponent implements OnInit, AfterViewInit  {

  constructor(private renderer: Renderer2, private el: ElementRef) { }
 
   

  ngOnInit(): void {
  }

  ngAfterViewInit(){
   
    this.renderer.setStyle(this.el.nativeElement,'position','absolute');
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor', 'pink');
     this.onResize(); 
    
  }
  
  onResize() {   
    this.renderer.setStyle(this.el.nativeElement,'top', this.renderer.parentNode(this.el.nativeElement).children[0].firstElementChild.offsetHeight+'px')
    this.renderer.setStyle(this.el.nativeElement,'left', this.renderer.parentNode(this.el.nativeElement).children[1].firstElementChild.offsetWidth+'px')
    this.renderer.setStyle(this.el.nativeElement,'width',(document.body.clientWidth)- this.renderer.parentNode(this.el.nativeElement).children[1].firstElementChild.offsetWidth+'px')
    
  }
   
  


}
