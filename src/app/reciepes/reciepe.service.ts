import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./reciep.model";
import { Ingredients } from "../shared/ingredients/ingredients.model";
import { shopService } from "../shop/shop.service";
import { Subject } from "rxjs";

@Injectable({
providedIn:"root"
})
export class reciepe {
constructor(private shopService:shopService){}
selectedReciepe:Subject<Recipe>= new Subject<Recipe>;
recipes: Recipe[] = [
new Recipe("kabsa","https://www.munatycooking.com/wp-content/uploads/2022/07/mansaf-feature-image.jpg","mansaf is fatty jordonian reciepe",[
new Ingredients('Meat',1),
new Ingredients('rice',1)
])
,
new Recipe("kabsa2","https://www.munatycooking.com/wp-content/uploads/2022/07/mansaf-feature-image.jpg","mansaf is fatty jordonian reciepe",
[
  new Ingredients('Meat',1),
  new Ingredients('rice',1)
])
,
new Recipe("kabsa3","https://www.munatycooking.com/wp-content/uploads/2022/07/mansaf-feature-image.jpg","mansaf is fatty jordonian reciepe",[
  new Ingredients('Meat',1),
  new Ingredients('rice',1)
  ])
];

getReciepes(){
return [...this.recipes]
}

getRecipeByTitle(title:string):Recipe{
let recipe = this.recipes.find(el=>el.title==title);
return recipe || new Recipe("kabsa","https://www.munatycooking.com/wp-content/uploads/2022/07/mansaf-feature-image.jpg","mansaf is fatty jordonian reciepe",[
  new Ingredients('Meat',1),
  new Ingredients('rice',1)
  ]);
}

onSelect(receipe:Recipe){
this.selectedReciepe.next(receipe);
}

addIngredientsToShop(ingredient:Ingredients[]){
 this.shopService.addToShop(ingredient);
 console.log(this.shopService.newIngredients);
}
}
