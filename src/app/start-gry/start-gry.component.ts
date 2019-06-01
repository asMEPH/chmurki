import { Component, OnInit } from '@angular/core';
import { EngineService } from '../engine.service';

@Component({
  selector: 'app-start-gry',
  templateUrl: './start-gry.component.html',
  styleUrls: ['./start-gry.component.less']
})
export class StartGryComponent implements OnInit {
  czyNieGramy = false;

  constructor(private engine: EngineService) { 

  this.engine.isGame.asObservable().subscribe(e => {
      console.log('----start gry' + e);
    this.czyNieGramy = e;
    });
  }

  startGry() {
    this.engine.startGry();
    console.log('----start gry------');
  }

  ngOnInit() {
  }

}
