import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "hello",
  template: `
    <h3>Promises</h3>
    <span [innerHtml]="promiseContent"></span>
    <br />

    ===============================
    <h3>Observable</h3>
    <span [innerHtml]="observableContent"></span>
  `
})
export class HelloComponent {
  promise: Promise<any>;
  promiseContent: string = "";
  observable: Observable<any>;
  observableContent: string = "";

  constructor() {
    this.promises();
    this.observables();
  }

  promises() {
    // Before Promis cretation
    this.promiseContent += "1. Just Before promise creation. <br/>";

    // Promise funtion passed through the constructor will be executed eagerly. Jjust at the time of creation
    this.promise = new Promise((resolve, reject) => {
      this.promiseContent += "2. Inside the promise. <br/>";
      resolve("6. Welcom, Sajitha");
    });

    // This will call before then
    this.promiseContent += "3. Before calling then on Promise. <br/>";

    // Then will be triggered at last
    this.promise.then(res => {
      this.promiseContent += `5. Inside then, Greeting from Promise: ${res} <br/>`;
    });

    // Promises are asynchrones
    this.promiseContent += "4. After the promise 'then' block. <br/>";
  }

  observables() {
    // Once subcrption triggered only observer call back function will be executed
    this.observable = new Observable(observer => {
      this.observableContent += "Inside obervable <br/>";
      observer.next("WelCome Sajitha Observer <br/>");
      observer.complete();
    }).pipe(map(v => (v += "Insde Pipe <br/>")));

    // observable.pipe(map(v => 2 * v));
    // observable.pipe(mapTo('this will be retrun instead of source obervable content'))

    // This line will be displayed first
    this.observableContent += "Before calling subscribe <br/>";

    // Once subscription triggered it will retrun here
    const subscription = this.observable.subscribe({
      next: value => {
        this.observableContent += value;
      },
      complete: () => {
        this.observableContent += "Done with greeting leady <br/>";
      }
    });

    subscription.unsubscribe();

    // Observables are synchrones or asynchrones
    this.observableContent += " After subscription block. <br/>";

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
