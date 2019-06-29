import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChmurkaComponent } from './chmurka/chmurka.component';
import { HeadComponent } from './head/head.component';
import { StartGryComponent } from './start-gry/start-gry.component';
import { KoniecGryComponent } from './koniec-gry/koniec-gry.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChmurkaComponent,
    HeadComponent,
    StartGryComponent,
    KoniecGryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
