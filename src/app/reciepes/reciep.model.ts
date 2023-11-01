import { Ingredients } from "../shared/ingredients/ingredients.model";

export class Recipe {
    title: string;
    img:string;
    desc:string;
    ingredients:Ingredients[];
    constructor(title: string,img: string,desc: string,ingredients:Ingredients[]){
        this.title = title;
        this.img = img ;
        this.desc=desc;
        this.ingredients=ingredients
    }
}
