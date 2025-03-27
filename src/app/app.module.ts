import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";


@NgModule({
    declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
    imports: [BrowserModule, UserInputModule, RouterOutlet],
    bootstrap: [AppComponent]
})
export class AppModule {
}