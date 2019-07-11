import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousesComponent } from './houses/houses.component';
import { BooksComponent } from './books/books.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CharactersComponent } from './characters/characters.component';
import { BookViewComponent } from './book-view/book-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';


const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'books',component:BooksComponent},
  {path:'houses',component:HousesComponent},
  {path:'characters',component:CharactersComponent},
  {path:'books/:bookId',component:BookViewComponent},
  {path:'houses/:houseId',component:HouseViewComponent},
  {path:'characters/:characterId',component:CharacterViewComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
