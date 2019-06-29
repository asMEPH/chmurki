import { Injectable } from '@angular/core';

import { ChmurkaComponent } from './chmurka/chmurka.component';
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EngineService {

  lists: Array<ChmurkaComponent> = [];
  score = new BehaviorSubject<number>(0);

  czyGramy: boolean = false;
  czasGry = 10; //120 sekund
  czasStartu: Date;


  isGame = new BehaviorSubject<boolean>(this.czyGramy);
  endGame = new BehaviorSubject<any>(false);


  private _score = 0;
  constructor(private sendScore: HttpClient) { }

  startGry(nickname) {

    if (nickname.trim() == "")

      return;


    localStorage.setItem('nickname', nickname);

    this.czyGramy = true;
    this.czasStartu = moment().add(this.czasGry, 'seconds').toDate();
    this.isGame.next(this.czyGramy);

  }

  public Click(item: ChmurkaComponent) {
    if (this.lists.filter(e => e === item).length == 1) {

      this._score += item.addScore;

      this.score.next(this._score);
      this.lists = this.lists.filter(e => e != item);
    }
  }


  public koniecGry() {

  }

  public czasGryWylicz() {
    this.czyGramy = moment(this.czasStartu).diff(new Date(), 'seconds') > 0;


    if (!this.czyGramy) {

      setTimeout(() => {

        this.sendScore.post('http://score.wsi.edu.pl/scores?limit=10',
          { alias: localStorage.getItem('nickname'), score: this._score })
          .subscribe(e => {
            this.endGame.next(e);
          });

      }, 15000);
    }
  }

  public addItem(item: ChmurkaComponent) {
    this.lists.push(item);
  }


  scoreSubs() {
    return this.score.asObservable();
  }

}
