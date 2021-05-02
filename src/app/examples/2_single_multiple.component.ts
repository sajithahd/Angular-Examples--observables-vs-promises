import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "single_multiple",
  template: `
    <div class="back" routerLink="/">
      < Back
    </div>
    <h2>Single Value vs Multiple Values</h2>

    <h3>Promises</h3>
    <span [innerHtml]="promiseContent"></span>
    <br />
    ===============================
    <h3>Observables</h3>
    <span [innerHtml]="observableContent"></span>
  `
})
export class SingleVsMultiple {
  promise: Promise<string>;
  promiseContent: string = "";
  observable: Observable<string>;
  observableContent: string = "";

  constructor() {
    this.promises();
    this.observables();
  }

  promises() {
    // Promise with multiple value resolves
    this.promise = new Promise((resolve, reject) => {
      this.promiseContent +=
        "1. Promise created and now you are inside the Promise. <br/>";

      // 1st resolve
      resolve("2. This is the first message by the Promise.");

      //second resolve - This will never display
      resolve("3. This is the second message by the Promise.");
    });

    // 'Then' will be registered and queued but the callback executed later asynchronously
    this.promise.then(res => {
      this.promiseContent += res + " <br/>";
      this.promiseContent += `4. Inside 'then', Successfully retrieved 
      messages from the Promise. <br/>`;
    });
  }

  observables() {
    // Once subcrption triggered only observer call back function will be executed
    this.observable = new Observable(observer => {
      this.observableContent += "1. Inside obervable <br/>";
      observer.next("2. This is the 1st message by the Observable.<br/>");
      observer.next("3. This is the 2nd message by the Observable.<br/>");
      observer.complete();
    });

    const subscription = this.observable.subscribe({
      next: value => {
        this.observableContent += value;
        this.observableContent +=
          "4. Inside 'subscription', Successfully retrieved messages from the Observable. <br/></br>";
      },
      complete: () => {
        this.observableContent += "5. Done with the subscription <br/>";
      }
    });

    subscription.unsubscribe();
  }
}
