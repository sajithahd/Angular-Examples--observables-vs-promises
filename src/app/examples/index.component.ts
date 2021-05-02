import { Component, VERSION } from "@angular/core";

@Component({
  selector: "index",
  template: `
    <div class="menu">
      <a routerLink="/eager_lazy">Eager vs Lazy </a>
      <a routerLink="/single_multiple">Single value vs Multiple values </a>
    </div>
  `
})
export class IndexComponent {}