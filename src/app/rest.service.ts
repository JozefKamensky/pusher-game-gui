import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

  createRoom(roomName: String, playerName: String) {
    console.log('createRoom rest call');
    return this.http.get(environment.server.url + 'createRoom?room=' + roomName + '&player=' + playerName);
  }

  joinRoom(roomName: String, playerName: String) {
    console.log('joinRoom rest call');
    return this.http.get(environment.server.url + 'joinRoom?room=' + roomName + '&player=' + playerName);
  }

  moveNorth(roomName: String) {
    console.log('moveNorth rest call, room: ' + roomName);
    const url = environment.server.url + 'test/moveNorth?room=' + roomName;
    console.log(url);
    return this.http.get(url);
  }

}
