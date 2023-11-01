import { Component,Input,ViewEncapsulation ,OnInit} from '@angular/core';
import { Recipe } from '../reciep.model';
import { shopService } from 'src/app/shop/shop.service';
import { Ingredients } from 'src/app/shared/ingredients/ingredients.model';
import { reciepe } from '../reciepe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit{
  @Input() recipe!:Recipe;
  activeRecipe!:Recipe;
  constructor(private recipeSERVICE:reciepe,private activeRoute:ActivatedRoute,private router:Router){}
  addToShop(data:Ingredients[]){
    this.recipeSERVICE.addIngredientsToShop(data);
  }
  ngOnInit(){
  console.log(this.activeRoute.snapshot.params['title'])
  //snapshot is not the best solution as it not rerender component when we need change inside it but observables is the best solution
  // this.activeRecipe = this.recipeSERVICE.getRecipeByTitle(this.activeRoute.snapshot.params['title'])
  this.activeRoute.params.subscribe((params:Params)=> this.activeRecipe=this.recipeSERVICE.getRecipeByTitle(params['title']))

  }
  goHome(){
  this.router.navigate(['/'])
  }
  editRecipe(r:Recipe){
    this.router.navigate(['recipes',r.title,'edit']);
    }
  }
