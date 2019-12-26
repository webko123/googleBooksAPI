import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() isDialogOpen = false;
  @Input() title: string;
  @Input() categories: [];
  @Input() publisher: string;
  @Input() publishedDate: Date;
  @Input() authors: [] = [];
  @Input() isInFavourites: boolean;
  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();
  @Output() addBook: EventEmitter<any> = new EventEmitter();
  @Output() removeBook: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickOutside() {
    this.closeDialog.emit();
  }

  addToFavourites() {
    this.addBook.emit();
  }

  removeFromFavourites() {
    this.removeBook.emit();
  }
}
