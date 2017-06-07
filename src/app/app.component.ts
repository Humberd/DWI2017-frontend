import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myTitle: string = "Hello From Component!!!";

  constructor() {
    setTimeout(() => {
      this.myTitle = "I've changed in setTimeout..."
    }, 2000)
  }
}
