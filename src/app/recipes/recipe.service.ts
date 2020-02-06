import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Big Fat Burger",
      "This is simply a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeDv4k7c-xaS4ug_SAQEhEZKzFmK5wZqFbFdDhxg1__xvFpAdw",
      [
        new Ingredient("Buns", 2),
        new Ingredient("Meat", 1),
        new Ingredient("Lettuce", 1),
        new Ingredient("Tomatoes", 1),
        new Ingredient("Onions", 1),
        new Ingredient("Cheese", 1)
      ]
    ),
    new Recipe(
      "Chips and Pork",
      "This is simply a test",
      "https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn",
      [new Ingredient("Pork meat", 1), new Ingredient("French fries", 20)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number){
    return this.recipes.slice()[index];
  }
}
