import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
 public allHouses;
 public errorMsg ="";

  constructor(private _appHttpService: AppHttpService, private _router: Router) { }
  
    ngOnInit() {
      this.allHouses =this._appHttpService.getHouses().subscribe(
        data => {
          this.allHouses = data;
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
