import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css']
})
export class HouseViewComponent implements OnInit {
  public currentHouse;
  public errorMsg ="";
  
  constructor(private _appHttpService: AppHttpService,private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    let myhouseId= this._route.snapshot.paramMap.get('houseId');
    this._appHttpService.getSingleHouseInformation(myhouseId).subscribe(
      data => {
        this.currentHouse = data;
        console.log(data);
      },
      error => {
        this.errorMsg = error.errorMessage;
        console.log(error.errorMessage);
      }
    );
  }

}