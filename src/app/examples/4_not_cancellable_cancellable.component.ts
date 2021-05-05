import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "notcanx_canx",
  template: `
    <div class="back" routerLink="/">
      < Back
    </div>
    <h2>Not Cancellable vs Cancellable</h2>

    <h3>Observables</h3>
    <span [innerHtml]="asyncObservableContent"></span>
  `
})
export class NotCanxVsCanx {
  observable: Observable<string>;
  observableContent: string = "";

  constructor() {
    this.observables();
  }

  observables() {
    // Once subcrption triggered only observer call back function will be executed
    this.observable = new Observable(observer => {
      setTimeout(() => {
        observer.next("4. This is the async content.<br/>");
        observer.complete();
      }, 1000);
      observer.next("2. This is the sync content.<br/>");
    });

    // This line will be displayed first
    this.observableContent += "1. Before calling subscribe. <br/>";

    // Once subscription triggered it will retrun here
    const subscription2 = this.observable.subscribe(value => {
      this.observableContent += value;
    });

    // Observables are synchrones or asynchrones
    this.observableContent += "3. After subscription block. <br/>";
  }
}
