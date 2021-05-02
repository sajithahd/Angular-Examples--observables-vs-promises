import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "eagerVsLazy",
  template: `
    <h2>Promises</h2>
    <span [innerHtml]="promiseContent"></span>
    <br />
    ===============================
    <h2>Observable</h2>
    <span [innerHtml]="observableContent"></span>
  `
})
export class EagerVsLazy {
  promise: Promise<string>;
  promiseContent: string = "";
  observable: Observable<string>;
  observableContent: string = "";

  constructor() {
    this.promises();
    this.observables();
  }

  promises() {
    // Before Promise cretation
    this.promiseContent += "1. Just Before the Promise creation. <br/>";

    // Promise funtion passed through the constructor will be executed eagerly.
    // Just at the time of creation
    this.promise = new Promise((resolve, reject) => {
      this.promiseContent +=
        "2. Promise created and now you are inside the Promise. <br/>";
      resolve("5. 'Welcome, Sj' - This is the message by the Promise.");
    });

    // This will call before then
    this.promiseContent += "3. Before calling 'then' on Promise. <br/>";

    // 'Then' will be registered and queued but the callback executed later asynchronously
    this.promise.then(res => {
      this.promiseContent += res + " <br/>";
      this.promiseContent += `6. Inside 'then', Successfully retrieved 
      messages from the Promise. <br/>`;
    });

    // Promises are asynchrones
    this.promiseContent += "4. After the Promise 'then' block. <br/>";
  }

  observables() {
    // Once subcrption triggered only observer call back function will be executed
    this.observable = new Observable(observer => {
      this.observableContent += "2. Inside obervable <br/>";
      observer.next(
        "3. 'WelCome Sj' - This is the message by the observable.<br/>"
      );
      observer.complete();
    }); //.pipe(map(v => (v += "4. Insde Pipe -  <br/>")));

    // observable.pipe(map(v => 2 * v));
    // observable.pipe(mapTo('this will be retrun instead of source obervable content'))

    // This line will be displayed first
    this.observableContent += "1. Before calling subscribe <br/>";

    // Once subscription triggered it will retrun here
    const subscription = this.observable.subscribe({
      next: value => {
        this.observableContent += value;
        this.observableContent +=
          "4. Inside 'subscription', Successfully retrieved messages from the Observable. <br/>";
      },
      complete: () => {
        this.observableContent += "5. Done with the subscription <br/>";
      }
    });

    const subscription2 = this.observable.subscribe({
      next: value => {
        this.observableContent += value;
        this.observableContent +=
          "4. Inside 'subscription', Successfully retrieved messages from the Observable. <br/>";
      },
      complete: () => {
        this.observableContent += "5. Done with the subscription <br/>";
      }
    });
    subscription.unsubscribe();

    // Observables are synchrones or asynchrones
    this.observableContent += "6. After subscription block. <br/>";

    // this.greetingLady.subscribe(
    //   value => {
    //     this.greetingLadyContent += value;
    //   },
    //   () => {
    //     this.greetingLadyContent += "Done with greeting leady <br/>";
    //   }
    // );
  }
}
