import { Component, OnInit } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-view',
  templateUrl: './character-view.component.html',
  styleUrls: ['./character-view.component.css']
})
export class CharacterViewComponent implements OnInit {
  public currentCharacter;
  public errorMsg ="";
  constructor(private _appHttpService: AppHttpService,private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    let myCharacterId= this._route.snapshot.paramMap.get('characterId');
    this._appHttpService.getSingleCharacterInformation(myCharacterId).subscribe(
      data => {
        this.currentCharacter = data;
        console.log(data);
      },
      error => {
        this.errorMsg = error.errorMessage;
        console.log(error.errorMessage);
      }
    );
  }

}