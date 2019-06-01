import { EngineService } from './../engine.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chmurka',
  templateUrl: './chmurka.component.html',
  styleUrls: ['./chmurka.component.less']
})

// https://drive.google.com/drive/folders/141tzNWh85_kt0NEnqhLFdtTmtZ1mxzy0
export class ChmurkaComponent implements OnInit {


  constructor(private _es:EngineService) { }

  down = false;
  speed = 3000; // w milisekundach
  left = 0;
  public isClick = false;
  public addScore = 1;

  click()
  {
    this.isClick = true;
    this.speed = 100;
    this._es.Click(this);
  }

  ngOnInit() {
    this.speed = Math.floor(Math.random() * 7000) + 7000;
    this.left = Math.floor(Math.random() * 4) * 25;
    this.addScore = Math.floor(Math.random() * 4) - 1;
    this._es.addItem(this);
    setTimeout( ()=>
       {
          this.down = true;
        }, 300);
  }

}
