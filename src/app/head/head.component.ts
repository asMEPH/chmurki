import { EngineService } from './../engine.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.less']
})
export class HeadComponent implements OnInit {
 score = 0;
  constructor(private _es:EngineService) {
    this._es.score.subscribe( (_score) =>{
        this.score = _score;
    });
   }

  ngOnInit() {
  }

}
