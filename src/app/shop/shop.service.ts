import { EventEmitter, Injectable } from "@angular/core";
import { Ingredients } from "../shared/ingredients/ingredients.model";
import { Subject } from "rxjs";

@Injectable({

providedIn:'root'
})
export class shopService{
constructor(){};
ingredients:Ingredients[]=[
  new Ingredients('Kabsa',5),
  new Ingredients('Kabsa',2)
];


newIngredients:Ingredients[]=[...this.ingredients];
// addedIngredients:EventEmitter<Ingredients[]> = new EventEmitter<Ingredients[]> ;
addedIngredients:Subject<Ingredients[]> = new Subject<Ingredients[]> ;

addIngredient(ingredient:Ingredients){
  this.newIngredients.push(ingredient);
  return this.addedIngredients.next([...this.newIngredients])
}

addToShop(ingredients:Ingredients[]){
this.newIngredients.push(...ingredients);
this.addedIngredients.next([...this.newIngredients])

}

}
