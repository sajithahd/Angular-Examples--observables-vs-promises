import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
    Promises<br />
    <span [innerHtml]="greetingPostContent"></span>
    <br />
    Observable<br />
    <span [innerHtml]="greetingLadyContent"></span>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  greetingPoster: Promise<any>;
  greetingPostContent: string = "";
  greetingLady: Observable<any>;
  greetingLadyContent: string = "";

  constructor() {
    this.promise();
    this.observable();
  }

  promise() {
    // Promise body will run eagerly. just at the creation
    this.greetingPoster = new Promise((resolve, reject) => {
      this.greetingPostContent += " Inside the promise. <br/>";
      resolve("Welcom, Sajitha");
    });

    // This will call before then
    this.greetingPostContent += " Before calling then on Promise. <br/>";

    // Then will be triggered at last
    this.greetingPoster.then(res => {
      this.greetingPostContent += ` Inside then, Greeting from Promise: ${res} <br/>`;
    });
  }

  observable() {
    // Once subcrption triggered only observer call back function will be executed
    this.greetingLady = new Observable(observer => {
      this.greetingLadyContent += "Inside obervable <br/>";
      observer.next("WelCome Sajitha Observer <br/>");
      observer.complete();
    }).pipe(map(v => (v += "Insde Pipe <br/>")));

    // observable.pipe(map(v => 2 * v));
    // observable.pipe(mapTo('this will be retrun instead of source obervable content'))

    // This line will be displayed first
    this.greetingLadyContent += "Before calling subscribe <br/>";

    // Once subscription triggered it will retrun here
    const subscription = this.greetingLady.subscribe({
      next: value => {
        this.greetingLadyContent += value;
      },
      complete: () => {
        this.greetingLadyContent += "Done with greeting leady <br/>";
      }
    });

    subscription.unsubscribe();

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
