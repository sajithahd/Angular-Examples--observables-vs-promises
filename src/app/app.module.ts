import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { EagerVsLazy } from "./examples/eager_lazy.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, EagerVsLazy],
  bootstrap: [AppComponent]
})
export class AppModule {}
