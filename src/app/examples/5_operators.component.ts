import { Component, Input } from "@angular/core";
import { interval, Observable } from "rxjs";
import { map, take } from "rxjs/operators";

@Component({
  selector: "operators",
  template: `
    <div class="back" routerLink="/">
      < Back
    </div>
    <h2>Operators</h2>

    <h3>Observables</h3>
    <span [innerHtml]="observableContent"></span>
  `
})
export class Operators {
  observable: Observable<number>;
  observableContent: string = "";

  constructor() {
    this.observables();
  }

  observables() {
    // Operators are useful in transforming streams
    this.observable = interval(1000)
    .pipe(
      take(3),
      map(v => Date.now())
    );

    // Once subscription triggered it will retrun here
    const subscription = this.observable.subscribe(value => {
      this.observableContent += value + '</br>';
    });
  }

  // source: https://codecraft.tv/courses/angular/reactive-programming-with-rxjs/observables-and-rxjs/
}
