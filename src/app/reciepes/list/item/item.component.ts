import { Component,Input,ViewEncapsulation,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../reciep.model';
import { reciepe } from '../../reciepe.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  // encapsulation:ViewEncapsulation.Emulated,
})
export class ItemComponent {
  @Input() recipeEl:any;
  // @Output() recipeEm = new EventEmitter<Recipe>();
  // sendRecipe(rec:Recipe){
  //   this.recipeEm.emit(rec);
  // }

  constructor(private reciepeService:reciepe,private router:Router,private activatedR:ActivatedRoute){
  }

  sendRecipe(rec:Recipe){
    this.reciepeService.onSelect(rec);
  }

}

