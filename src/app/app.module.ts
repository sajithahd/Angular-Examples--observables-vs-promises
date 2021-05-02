import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { IndexComponent } from "./examples/index.component";
import { EagerVsLazy } from "./examples/eager_lazy.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, IndexComponent, EagerVsLazy],
  bootstrap: [AppComponent]
})
export class AppModule {}
