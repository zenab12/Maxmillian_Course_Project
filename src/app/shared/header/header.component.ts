import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
@Output() selectedSection = new EventEmitter<string>();
constructor(){}
onSelect(section:string):void{
    this.selectedSection.emit(section)
}
}
