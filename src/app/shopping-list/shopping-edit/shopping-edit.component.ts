import { Component, OnInit, ViewChild, ElementRef} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})

export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameInputref: ElementRef;
   @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<{ ingredientName: string; ingredientAmount: number }>();

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddIngredient() {
    const ingName = this.nameInputref.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIng = new Ingredient(ingName, ingAmount);
    this.shoppingListService.addIngredient(newIng);

  // onAddIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
  //   // this.ingredientAdded.emit({ ingredientName: name.value, ingredientAmount: Number(amount.value) });
  //   this.ingredientAdded.emit({ ingredientName: name.value, ingredientAmount: Number(amount.value) });
  }
}
