import { Component, OnInit,OnDestroy } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients/ingredients.model';
import { shopService } from '../shop.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListShopComponent implements OnInit,OnDestroy{
  ingredients!:Ingredients[];
  ingredientSubscription!:Subscription;
  constructor(private shopService:shopService){}

  ngOnInit():void{
  this.ingredients = this.shopService.newIngredients;
  this.ingredientSubscription = this.shopService.addedIngredients.subscribe(data=>{
  return this.ingredients = data});
  }

ngOnDestroy(): void {
  this.ingredientSubscription.unsubscribe()
}


}
