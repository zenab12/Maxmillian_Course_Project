import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective implements OnInit{
@HostBinding('class.open') isOpen:boolean = false;
@HostListener('click') toggleDrop(){
this.isOpen = !this.isOpen
}

ngOnInit(): void {
}

}
