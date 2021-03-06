import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"]; //id here needs to match the value set in path in the app-routing.module.ts file
      //if we are in edit mode params['id'] will return a value i.e id but if we are in new mode then it will return  undefined which equals null
      this.editMode = params["id"]! = null;
    });
  }
}
