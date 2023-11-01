import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
selector:'[highLighter]'
})
export class highLighter{

  @Input('defaultColor') defaultColor:string="#fff";
  @Input('highLighter') newColor:string="#eee";
  @HostBinding('style.backgroundColor') backgroundColor:string = '#fff';
  constructor(private element:ElementRef,private rederer:Renderer2) { }

  ngOnInit(): void {
    // console.log(this.element);
    // this.element.nativeElement.style.background='#eee';
    // this.rederer.setStyle(this.element.nativeElement,'background-color','#fff')
  }

  @HostListener('mouseenter') mouseEnter(){
    // this.rederer.setStyle(this.element.nativeElement,'background-color','#eee');
    this.backgroundColor = this.newColor

  }
  @HostListener('mouseleave') mouseLeave(){
    // this.rederer.setStyle(this.element.nativeElement,'background-color','#fff')
    this.backgroundColor = this.defaultColor;
  }
}
