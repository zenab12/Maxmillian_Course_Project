import { Component,Input } from '@angular/core';
import { Recipe } from '../reciep.model';
import { reciepe } from '../reciepe.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
// @Input() recipes:Recipe[];

recipes!:Recipe[];
selectedReciepe!: Recipe;
constructor(private receipeService:reciepe){
}
ngOnInit(): void {
  this.recipes = this.receipeService.getReciepes();
  }

}
