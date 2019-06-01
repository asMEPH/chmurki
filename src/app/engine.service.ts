import { Injectable } from '@angular/core';
import { ChmurkaComponent } from './chmurka/chmurka.component';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  lists: Array<ChmurkaComponent> = [];
  score = new BehaviorSubject<number>(0);

  czyGramy: boolean = false;
  czasGry = 120; //120 sekund
  czasStartu: Date;
  

  isGame = new BehaviorSubject<boolean>(this.czyGramy);

  

  private _score = 0;
  constructor() { }

  startGry() {
    this.czyGramy = true;
    this.czasStartu = moment().add(this.czasGry, 'seconds').toDate();
    this.isGame.next(this.czyGramy);
   }

  public Click(item:ChmurkaComponent)
  {
    if(this.lists.filter(e => e === item).length == 1){

     this._score += item.addScore;
     
     this.score.next(this._score);
     this.lists = this.lists.filter(e => e != item);
  }
}

  public addItem(item:ChmurkaComponent)
  {
    this.lists.push(item);
  }


  scoreSubs()
  {
    return this.score.asObservable();
  }

}
