import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/loginPage/login/login.component';
import { HomeComponent } from '../app/homePage/home/home.component';
import { FavoriteComponent } from '../app/global/favorite/favorite.component';

const routes: Routes = [
  { path: '',pathMatch: 'full', component: LoginComponent },
  { path: 'home-page', component: HomeComponent },
  { path: 'Favorite', component: FavoriteComponent }
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
