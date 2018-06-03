import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
  players: String[];
  intro: any;
  roomName: String;
  playerName: String;

  constructor() { }

  getPlayers() {
    return this.players;
  }

  setPlayers(players: String[]) {
    this.players = players;
  }

  getIntro() {
    return this.intro;
  }

  setIntro(intro) {
    this.intro = intro;
  }
}
