import { Component, OnInit  } from '@angular/core';
import { GoogleBookApiService } from "src/app/search/BookApi.service";
import {Book} from "src/app/search/book";
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


 
  myBooks$: Observable<Book[]>;
  public loading = false;
  private searchTerm = new Subject<string>();
  private searchTermValue: string;
  private startIndex = '0';
  private maxResult = '20';

  constructor(private googleBookApiService: GoogleBookApiService, private router: Router) { }

  ngOnInit() {
    this.getBooks();
  }

  search(term: string) {
    this.searchTerm.next(term);
    this.searchTermValue = term;
  }

  getBooks() {
    this.myBooks$ = this.searchTerm.pipe(
      tap(_ => this.loading = true),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.googleBookApiService.getBooksFromApi(term, `${this.maxResult}`, `${this.startIndex}`)),
      tap(_ => this.loading = false)
    );
  }


  prev() {
    if (parseInt(this.startIndex, 10) > 0) {
      const prevPage = parseInt(this.startIndex, 10) - parseInt(this.maxResult, 10);
      this.startIndex = prevPage.toString();
      this.myBooks$ = this.googleBookApiService.getBooksFromApi(this.searchTermValue, '20', `${this.startIndex}`);
    } else {
      return;
    }
  }

  next() {
    const nextPage = parseInt(this.startIndex, 10) + 20;
    this.startIndex = nextPage.toString();
    this.myBooks$ = this.googleBookApiService.getBooksFromApi(this.searchTermValue, '20', `${this.startIndex}`);
  }

  goToFavorite(){
    this.router.navigate(['/Favorite']);
  }

  goToHome(){
    this.router.navigate(['/home-page']);
  }

}
