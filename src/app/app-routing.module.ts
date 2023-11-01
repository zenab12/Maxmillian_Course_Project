import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReciepesComponent } from './reciepes/reciepes.component';
import { ShopComponent } from './shop/shop.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './reciepes/details/details.component';
import { EditRecipeComponent } from './reciepes/edit-recipe/edit-recipe.component';
import { ListComponent } from './reciepes/list/list.component';
import { NewRecipeComponent } from './reciepes/new-recipe/new-recipe.component';

const routes: Routes = [
{path:'',redirectTo:'recipes',pathMatch:'full'},
{path:'recipes',component:ReciepesComponent,children:[
  {path:'',component:ListComponent},
  {path:'new',component:NewRecipeComponent},
  {path:':title',component:DetailsComponent},
  {path:':title/edit',component:EditRecipeComponent},
]},
{path:'shop',component:ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
