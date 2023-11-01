import { Component, Input, OnInit,ViewEncapsulation,OnDestroy } from '@angular/core';
import { Recipe } from './reciep.model';
import { reciepe } from './reciepe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reciepes',
  templateUrl: './reciepes.component.html',
  // encapsulation:ViewEncapsulation.Emulated,
  styleUrls: ['./reciepes.component.css']
})
export class ReciepesComponent implements OnInit,OnDestroy{

   //   recipes: Recipe[] = [
    //     new Recipe("kabsa","https://www.munatycooking.com/wp-content/uploads/2022/07/mansaf-feature-image.jpg","mansaf is fatty jordonian reciepe")
    //   ,
    //   new Recipe("kabsa2","https://www.munatycooking.com/wp-content/uploads/2022/07/mansaf-feature-image.jpg","mansaf is fatty jordonian reciepe")
    // ,
    //  new Recipe("kabsa3","https://www.munatycooking.com/wp-content/uploads/2022/07/mansaf-feature-image.jpg","mansaf is fatty jordonian reciepe")

    //   ];

  recipes!:Recipe[];
  selectedReciepe!: Recipe;
  selectedRecipeSubscription!:Subscription;
  constructor(private receipeService:reciepe){
  }

  ngOnInit(): void {
    this.selectedRecipeSubscription= this.receipeService.selectedReciepe.subscribe((data:Recipe)=>this.selectedReciepe = data)
  }

  // onRecipe(data:any){
  //     this.selectedReciepe = data;
  // }

ngOnDestroy(): void {
  this.selectedRecipeSubscription.unsubscribe()
}
}
