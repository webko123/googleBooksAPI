import { Component, OnInit } from '@angular/core';
import { GoogleBookApiService } from "src/app/search/BookApi.service";
import {Book} from "src/app/search/book";
import { Router } from "@angular/router";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favourites: Book[] = [];

  constructor(private googleBookApiService: GoogleBookApiService, private router: Router) { }

  ngOnInit() {
    this.favourites = this.googleBookApiService.favouritesBooks;
  }

  goToFavorite(){
    this.router.navigate(['/Favorite']);
  }

  goToHome(){
    this.router.navigate(['/home-page']);
  }



}