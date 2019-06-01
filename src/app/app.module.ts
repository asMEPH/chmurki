import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChmurkaComponent } from './chmurka/chmurka.component';
import { HeadComponent } from './head/head.component';
import { StartGryComponent } from './start-gry/start-gry.component';

@NgModule({
  declarations: [
    AppComponent,
    ChmurkaComponent,
    HeadComponent,
    StartGryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
