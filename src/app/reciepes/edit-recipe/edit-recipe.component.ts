import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../reciep.model';
import { reciepe } from '../reciepe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
recipe!:Recipe;
editMode:boolean=false;
constructor(private recService:reciepe ,private activatedR:ActivatedRoute){}
ngOnInit(){
    this.activatedR.params.subscribe((params:Params)=>this.recipe = this.recService.getRecipeByTitle(params['title']));
    this.activatedR.queryParams.subscribe((params:Params)=>
    this.editMode=params['editable']=='1'?true:false)
}
}
