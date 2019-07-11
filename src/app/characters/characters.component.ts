import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public allCharacters;
  public errorMsg ="";
  constructor(private _appHttpService: AppHttpService, private _router: Router) { }
  
    ngOnInit() {
      this.allCharacters =this._appHttpService.getCharacters().subscribe(
        data => {
          this.allCharacters = data;
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
