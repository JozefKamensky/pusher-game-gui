import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { GameWindowComponent } from './game-window/game-window.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FormsModule } from '@angular/forms';
import { RestService } from './rest.service';
import { HttpClientModule } from '@angular/common/http';
import {PusherService} from "./pusher.service";
import { MoveWindowComponent } from './move-window/move-window.component';
import { VoteWindowComponent } from './vote-window/vote-window.component';
import {AppRoutingModule} from "./app-routing.module";
import { IntroComponent } from './intro/intro.component';
import {SharedDataService} from "./shared-data.service";


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    GameWindowComponent,
    MainMenuComponent,
    MoveWindowComponent,
    VoteWindowComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RestService, PusherService, SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
