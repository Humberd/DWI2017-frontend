import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book = {
    title: "Lokomotywa",
    author: "Julian Tuwim"
  };

  constructor() {
    setTimeout(() => {
      this.book.title = "Murzynek Bambo"
    }, 2000);
  }
}
