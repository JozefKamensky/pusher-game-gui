import {Component, Input, OnInit} from '@angular/core';
import {PusherService} from "../pusher.service";
import {SharedDataService} from "../shared-data.service";
import {RestService} from "../rest.service";

@Component({
  selector: 'app-move-window',
  templateUrl: './move-window.component.html',
  styleUrls: ['./move-window.component.css']
})
export class MoveWindowComponent implements OnInit {
  @Input() moveData: any;
  constructor(private dataService: SharedDataService,
              private rest: RestService) { }

  ngOnInit() {
    // this.pusher.channel.bind('move', data => {
    //   this.moveData = data;
    // });
  }

  moveNorth() {
    const roomName = this.dataService.roomName;
    if (roomName === undefined) {
      console.log('Unable to move north');
      return;
    }
    this.rest.moveNorth(roomName).subscribe();
  }

}
