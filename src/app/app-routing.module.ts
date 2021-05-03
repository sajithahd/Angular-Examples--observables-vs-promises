import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IndexComponent } from "./examples/index.component";
import { EagerVsLazy } from "./examples/1_eager_lazy.component";
import { SingleVsMultiple } from "./examples/2_single_multiple.component";
import { AsyncVsSync } from "./examples/3_async_sync.component";

const routes: Routes = [
  { path: "", redirectTo: "/index", pathMatch: "full" },
  { path: "index", component: IndexComponent },
  { path: "eager_lazy", component: EagerVsLazy },
  { path: "single_multiple", component: SingleVsMultiple },
  { path: "async_sync", component: AsyncVsSync }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
