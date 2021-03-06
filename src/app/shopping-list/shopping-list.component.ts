import { Component, OnInit } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  //  ingredients: Ingredient[] = [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 5)];
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  // onAddedIngredient(ingredientData: {ingredientName: string, ingredientAmount: number}){
  //   this.ingredients.push({name: ingredientData.ingredientName, amount: ingredientData.ingredientAmount});
}
