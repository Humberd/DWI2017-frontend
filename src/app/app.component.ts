import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  booksList = [{
    title: "Lokomotywa",
    author: "Julian Tuwim"
  }, {
    title: "Na Straganie",
    author: "Jan Brzechwa"
  }];

  newBookTitle: string;

  constructor() {
  }

  public addNewBook(): void {
    this.booksList.push({
      title: this.newBookTitle,
      author: "Maciej Sawicki"
    });
  }
}
