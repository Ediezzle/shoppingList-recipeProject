import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"]
})

export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputref: ElementRef;
   @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
@Output() ingredientAdded = new EventEmitter<Ingredient>();
  // @Output() ingredientAdded = new EventEmitter<{ ingredientName: string; ingredientAmount: number }>();

  constructor() {}

  ngOnInit() {}

  onAddIngredient() {
    const ingName = this.nameInputref.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIng = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIng);

  // onAddIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
  //   // this.ingredientAdded.emit({ ingredientName: name.value, ingredientAmount: Number(amount.value) });
  //   this.ingredientAdded.emit({ ingredientName: name.value, ingredientAmount: Number(amount.value) });
  }
}
