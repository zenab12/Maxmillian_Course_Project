import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReciepesComponent } from './reciepes/reciepes.component';
import { ListComponent } from './reciepes/list/list.component';
import { ItemComponent } from './reciepes/list/item/item.component';
import { DetailsComponent } from './reciepes/details/details.component';
import { ShopComponent } from './shop/shop.component';
import { EditComponent } from './shop/edit/edit.component';
import { IngredientsComponent } from './shared/ingredients/ingredients.component';
import { HeaderComponent } from './shared/header/header.component';
import { ListShopComponent } from './shop/list/list.component';
import { DropDownDirective } from './directives/drop-down.directive';
import { myIf } from './directives/myIf.directive';
import { highLighter } from './directives/highleter.directive';
import { EditRecipeComponent } from './reciepes/edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './reciepes/new-recipe/new-recipe.component';
@NgModule({
  declarations: [
    AppComponent,
    ReciepesComponent,
    ListComponent,
    ItemComponent,
    DetailsComponent,
    EditRecipeComponent,
    ShopComponent,
    ListShopComponent,
    EditComponent,
    IngredientsComponent,
    HeaderComponent,
    DropDownDirective,
    highLighter,
    myIf,
    NewRecipeComponent

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
