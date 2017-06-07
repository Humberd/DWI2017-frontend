import { Component } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  booksList = [];

  newBookTitle: string;

  constructor(private httpService: Http) {
    this.getBooks()
      .subscribe()
  }

  public addNewBook(): void {
    const newBook = {
      title: this.newBookTitle,
      author: "Maciej Sawicki"
    };
    this.httpService.post("http://localhost:8080/api/v1/books", newBook)
      .mergeMap(() => this.getBooks())
      .subscribe()
  }

  public getBooks(): Observable<any> {
    return this.httpService.get("http://localhost:8080/api/v1/books")
      .map(response => response.json())
      .do(books => this.booksList = books)
  }
}
