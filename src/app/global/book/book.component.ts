import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { GoogleBookApiService } from "../../search/BookApi.service";
import {Book} from "../../search/book";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() btnClicked = false;
  @Output() openPopup: EventEmitter<Book> = new EventEmitter();
  public isDialogOpen = false;

  constructor(private googleBookApiService: GoogleBookApiService) { }

  ngOnInit() {
  }

  get bookImgSrc() {
    if (this.book.imageLinks === undefined) {
      return;
    } else {
      return this.book.imageLinks.thumbnail;
    }
  }

  openDialog() {
    this.isDialogOpen = true;
  }

  addBook() {
    this.googleBookApiService.addBookToFavourites(this.book);
    this.isDialogOpen = false;

  }

  get checkIfBookInFavourites() {
    return this.googleBookApiService.favouritesBooks.find(bookItem => bookItem === this.book);
  }

  removeBook() {
    this.googleBookApiService.removeBookFromFavourites(this.book.title);
    this.isDialogOpen = false;
  }

}
