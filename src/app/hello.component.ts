import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
    <span [innerHtml]="greetingPostContent"></span>
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

  constructor() {
    this.promise();
    this.observable();
  }

  observable() {
    //throw new Error("Method not implemented.");
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
}
