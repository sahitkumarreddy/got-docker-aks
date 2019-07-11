import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public allBooks;
  public errorMsg ="";
  constructor(private _appHttpService: AppHttpService, private _router: Router) { }

  ngOnInit() {
    this.allBooks =this._appHttpService.getBooks().subscribe(
      data => {
        this.allBooks = data;
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
