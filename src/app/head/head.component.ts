import { EngineService } from './../engine.service';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

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
  lefttime()
    {
      let tl = moment(this._es.czasStartu).diff(new Date(), 'seconds');
      if(tl>0)
      {
        

        return moment("2000-01-01").add(tl, 'second').toDate();
      }
      
     return 0;
    }
}
