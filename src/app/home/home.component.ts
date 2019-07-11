import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { Observable, forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allBooks;
  public allCharacters;
  public allHouses;
  public allItems;
  public errorMsg ="";

  constructor(private _appHttpService: AppHttpService, private _router: Router) { }

  ngOnInit() {
    let books = this._appHttpService.getBooks();
    let houses = this._appHttpService.getHouses();
    let characters = this._appHttpService.getCharacters();

    forkJoin([books, houses, characters]).subscribe(
      data => {
        this.allItems=data;
        this.allBooks = data[0];
        this.allHouses = data[1];
        this.allCharacters = data[2];
      },
      error => {
        this.errorMsg = error.errorMessage;
        console.log(error.errorMessage);
      }
    );
  }

  routeTo(item,url):any{
    let id= url.substring(url.lastIndexOf("/")+1);
    this._router.navigate([`/${item}`,id]);
  }

}
