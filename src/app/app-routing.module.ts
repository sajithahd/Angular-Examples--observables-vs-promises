import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IndexComponent } from "./examples/index.component";
import { EagerVsLazy } from "./examples/1_eager_lazy.component";
import { SingleVsMultiple } from "./examples/2_single_multiple.component";
import { AsyncVsSync } from "./examples/3_async_sync.component";
import { NotCanxVsCanx } from "./examples/4_not_cancellable_cancellable.component";
import { Operators } from "./examples/5_operators.component";

const routes: Routes = [
  { path: "", redirectTo: "/index", pathMatch: "full" },
  { path: "index", component: IndexComponent },
  { path: "eager_lazy", component: EagerVsLazy },
  { path: "single_multiple", component: SingleVsMultiple },
  { path: "async_sync", component: AsyncVsSync },
  { path: "notcanx_canx", component: NotCanxVsCanx },
  { path: "operators", component: Operators }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
