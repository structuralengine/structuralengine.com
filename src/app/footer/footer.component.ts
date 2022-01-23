import { Component } from "@angular/core";
import { LanguagesService } from "../providers/languages.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
  constructor(public language: LanguagesService) {}
}
