import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { IndexComponent } from "./examples/index.component";
import { EagerVsLazy } from "./examples/1_eager_lazy.component";
import { SingleVsMultiple } from "./examples/2_single_multiple.component";
import { AsyncVsSync } from "./examples/3_async_sync.component";
import { NotCanxVsCanx } from "./examples/4_not_cancellable_cancellable.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    IndexComponent,
    EagerVsLazy,
    SingleVsMultiple,
    AsyncVsSync,
    NotCanxVsCanx
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
