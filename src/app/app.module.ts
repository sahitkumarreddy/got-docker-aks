import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { HousesComponent } from './houses/houses.component';
import { CharactersComponent } from './characters/characters.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppHttpService } from './app-http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookViewComponent } from './book-view/book-view.component';
import { HouseViewComponent } from './house-view/house-view.component';
import { CharacterViewComponent } from './character-view/character-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    HousesComponent,
    CharactersComponent,
    NotFoundComponent,
    BookViewComponent,
    HouseViewComponent,
    CharacterViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
