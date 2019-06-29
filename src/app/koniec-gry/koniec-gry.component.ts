import { Component, OnInit } from '@angular/core';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-koniec-gry',
  templateUrl: './koniec-gry.component.html',
  styleUrls: ['./koniec-gry.component.less']
})
export class KoniecGryComponent implements OnInit {

   koniecGry = false;
   score = 0;
   constructor(private _es:EngineService, private engine: EngineService) {
     this._es.score.subscribe( (_score) =>{
         this.score = _score;
     });
   

  this.engine.endGame.asObservable().subscribe( e => {
    if(e !== false)
    {
    this.koniecGry = true;

    } else {
      this.koniecGry = false;
    
    }


  });
}
  ngOnInit() {
  }

}
