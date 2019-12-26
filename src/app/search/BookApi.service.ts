
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Book} from '../search/book';
import {catchError, map} from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
  })
  export class GoogleBookApiService {
  
    favouritesBooks: Book[] = [];
  
    constructor(private http: HttpClient) { }
  
  
    getBooksFromApi(q: string, maxResults?: string, startIndex?: string): Observable<any> {
      if (!q.trim()) {
        return of([]);
      }
      return this.http.get<Book[]>(environment.base_URL, {params:
          {
            q,
            maxResults,
            startIndex,
            apiKey: environment.API_KEY
          }
      })
        .pipe(
          map((res: any) => {
            return res.items.map(item => item.volumeInfo);
          }),
          catchError(this.handleError<Book[]>('countries', []))
        );
    }
  
    addBookToFavourites(book: Book) {
      return this.favouritesBooks.push(book);
    }
  
    removeBookFromFavourites(bookTitle: string) {
      const bookIndex = this.favouritesBooks.findIndex(book => book.title === bookTitle);
      this.favouritesBooks.splice(bookIndex, 1);
    }
  
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.log(`failed: ${error.message}`);
        return of(result as T);
      };
    }
  }
  
