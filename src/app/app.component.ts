import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  loadedFeature = "recipe";
  //if you use "(featureSelected)="loadedFeature=$event"" in the html file this method won't be necessary
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
