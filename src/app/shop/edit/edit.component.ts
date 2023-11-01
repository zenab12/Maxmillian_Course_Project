import { Component, OnInit } from '@angular/core';
import { shopService } from '../shop.service';
import { Ingredients } from 'src/app/shared/ingredients/ingredients.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
constructor(private shopService:shopService){}
ngOnInit():void{
}
addIngredient(data:Ingredients,event:Event){
this.shopService.addIngredient(data);
event.preventDefault();
}
}
