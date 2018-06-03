import {Component, Input, OnInit} from '@angular/core';
import {PusherService} from '../pusher.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: String[];

  constructor(private pusher: PusherService) { }

  ngOnInit() {
    this.players = ['JozkoMiesic', 'Carve', 'SamkoJeNajkrajsi'];
    this.pusher.channel.bind('players', data => {
      console.log(data);
      this.players = data;
    });
  }

}
