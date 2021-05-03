import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "async_sync",
  template: `
    <div class="back" routerLink="/">
      < Back
    </div>
    <h2>Asynchronous vs Synchronous/Asynchronous</h2>

    <h3>Promises</h3>
    <span [innerHtml]="promiseContent"></span>
    <br />

    ===============================

    <h3>Sync Observables</h3>
    <span [innerHtml]="observableContent"></span>
    <br />

    ===============================

    <h3>Async Observables</h3>
    <span [innerHtml]="asyncObservableContent"></span>
  `
})
export class AsyncVsSync {
  promise: Promise<string>;
  promiseContent: string = "";

  observable: Observable<string>;
  observableContent: string = "";
  asyncObservable: Observable<string>;
  asyncObservableContent: string = "";

  constructor() {
    this.promises();
    this.observables();
    this.async_observables();
  }

  promises() {
    this.promise = new Promise((resolve, reject) => {
      resolve("3. 'Welcome, Sj' - This is the message by the Promise.");
    });

    // This will call before then
    this.promiseContent += "1. Before calling 'then' on Promise. <br/>";

    // 'Then' will be registered and queued but the callback executed later asynchronously
    this.promise.then(res => {
      this.promiseContent += res + " <br/>";
      this.promiseContent += `4. Inside 'then', Successfully retrieved 
      messages from the Promise. <br/>`;
    });

    // Promises are asynchrones
    this.promiseContent += "2. After the Promise 'then' block. <br/>";
  }

  observables() {
    this.observable = new Observable(observer => {
      observer.next(
        "2. 'WelCome Sj' - This is the message by the observable.<br/>"
      );
      observer.complete();
    });

    // This line will be displayed first
    this.observableContent += "1. Before calling subscribe <br/>";

    // Once subscription triggered it will retrun here
    const subscription = this.observable.subscribe({
      next: value => {
        this.observableContent += value;
        this.observableContent +=
          "3. Inside 'subscription', Successfully retrieved messages from the Observable. <br/>";
      }
    });

    subscription.unsubscribe();

    // Observables are synchrones or asynchrones
    this.observableContent += "4. After subscription block. <br/>";
  }

  async_observables() {
    // Once subcrption triggered only observer call back function will be executed
    this.asyncObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(
          "2. 'WelCome Sj' - This is the message by the observable.<br/>"
        );
        observer.complete();
      }, 500);
    });

    // This line will be displayed first
    this.asyncObservableContent += "1. Before calling subscribe <br/>";

    // Once subscription triggered it will retrun here
    const subscription = this.asyncObservable.subscribe({
      next: value => {
        this.asyncObservableContent += value;
        this.asyncObservableContent +=
          "3. Inside 'subscription', Successfully retrieved messages from the Observable. <br/>";
      },
      complete: () => {
        this.observableContent += "5. Done with the subscription <br/>";
      }
    });

    subscription.unsubscribe();

    // Observables are synchrones or asynchrones
    this.asyncObservableContent += "4. After subscription block. <br/>";
  }
}
