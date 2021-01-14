import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
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

  constructor() {
    // Promise body will run eagerly. just at the creation
    this.greetingPoster = new Promise((resolve, reject) => {
      console.log("Inside the promise");
      resolve("Welcom, Sajitha");
    });

    // this will call before then
    console.log("Before calling then on Promise");

    // then will be triggered at last
    this.greetingPoster.then(res => {
      console.log(`Inside then, Greeting from Promise: ${res}`);
    });
  }
}
