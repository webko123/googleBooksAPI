import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './loginPage/login/login.component';
import {MatCardModule,ErrorStateMatcher,MatInputModule,MatFormFieldModule,MatButtonModule,MatDialogModule} from '@angular/material';
// import { FormBuilder, FormGroup, Validators,FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './homePage/home/home.component';
import { BookComponent } from './global/book/book.component';
import { PopupComponent } from './global/popup/popup/popup.component';
import { FavoriteComponent } from './global/favorite/favorite.component';

// import {ErrorStateMatcher} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BookComponent,
    PopupComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatCardModule,ReactiveFormsModule,MatInputModule,
    MatFormFieldModule,FormsModule,MatButtonModule,MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
