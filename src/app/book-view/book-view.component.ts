import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
   public currentBook;
   public errorMsg ="";
  constructor(private _appHttpService: AppHttpService,private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    let myBookId = this._route.snapshot.paramMap.get('bookId');
    this._appHttpService.getSingleBookInformation(myBookId).subscribe(
      data => {
        this.currentBook = data;
      },
      error => {
        this.errorMsg = error.errorMessage;
        console.log(error.errorMessage);
      }
    );
  }

}