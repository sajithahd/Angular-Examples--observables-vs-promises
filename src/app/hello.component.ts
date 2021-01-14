import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";

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
    this.greetingLady = new Observable(observer => {
      this.greetingLadyContent += "Inside obervable <br/>";
      observer.next(
        (this.greetingLadyContent += "WelCome Sajitha Observer <br/>")
      );
      observer.complete();
    });

    this.greetingLadyContent += "Before calling subscribe <br/>";
  }
}
