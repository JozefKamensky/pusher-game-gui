import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestService } from '../rest.service';
import {PusherService} from '../pusher.service';
import {Router} from '@angular/router';
import {SharedDataService} from '../shared-data.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  @ViewChild('form') mainMenuForm: NgForm;

  constructor(private rest: RestService,
              private pusher: PusherService,
              private router: Router,
              private dataService: SharedDataService) { }

  ngOnInit() {
  }

  createRoom() {
    const roomName = this.mainMenuForm.value.roomName;
    const playerName = this.mainMenuForm.value.playerName;
    console.log('createRoom');
    this.rest.createRoom(roomName, playerName)
      .subscribe(response => {
        if (response['status'] === 100) {
          // navigate to looby
          this.dataService.roomName = roomName;
          this.dataService.playerName = playerName;
          this.pusher.subscribeToChannel(roomName);
          this.pusher.channel.bind('test', data => {
            // alert(data);
            console.log(data);
          });
          this.router.navigate(['/', 'game']);
        }
      });
  }

  joinRoom() {
    console.log('joinRoom');
    const roomName = this.mainMenuForm.value.roomName;
    const playerName = this.mainMenuForm.value.playerName;
    this.rest.joinRoom(roomName, playerName)
      .subscribe(response => {
        console.log(response);
        if (response['status'] === 102) {
          // navigate to looby
          this.dataService.roomName = roomName;
          this.dataService.playerName = playerName;
          this.pusher.subscribeToChannel(roomName);
          this.pusher.channel.bind('test', data => {
            // alert(data);
            console.log(data);
          });
          this.router.navigate(['/', 'game']);
        }
      });
  }

}
