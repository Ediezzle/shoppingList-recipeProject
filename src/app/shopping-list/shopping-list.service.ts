import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 5)];

  getIngredients() {
    //use slice to get a only copy of the original array, not a reference to the og array.
    //if you were sure you won't change the array in this getIngredients and thereby changing the og array too, you could omit the .slice. this is because array is of reference type
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    //we could use the for iterator but then there would be too much event emission
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    //   this.ingredientsChanged.emit(this.ingredients.slice());
    // }

    //the ES6 spread operator allows us to turn an array of elements into a list of elements.
    //the ordinary push method will push the array as a single object to the other array
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
