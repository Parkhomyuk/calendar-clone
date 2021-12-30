import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'cal-sidebar-main',
  templateUrl: './sidebar-main.component.html',
  styleUrls: ['./sidebar-main.component.scss']
})
export class SidebarMainComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  
  

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {      
      this.renderer.setStyle(this.el.nativeElement, 'position','absolute' );
      this.renderer.setStyle(this.el.nativeElement, 'left','0px' );
      this.renderer.setStyle(this.el.nativeElement, 'margin','0px' );        
  }
  ngAfterViewChecked(): void {
    this.renderer.setStyle(this.el.nativeElement, 'top',this.renderer.parentNode(this.el.nativeElement).children[0].firstElementChild.clientHeight+'px' );     
    this.renderer.setStyle(this.el.nativeElement, 'height',window.innerHeight-this.renderer.parentNode(this.el.nativeElement).children[0].firstElementChild.clientHeight+'px' ); 
  }

  

}
