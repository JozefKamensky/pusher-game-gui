import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {SharedDataService} from "../shared-data.service";
import {PusherService} from "../pusher.service";

@Component({
  selector: 'app-game-window',
  templateUrl: './game-window.component.html',
  styleUrls: ['./game-window.component.css']
})
export class GameWindowComponent implements OnInit {
  activeWindow: String;
  @ViewChild('f') form: NgForm;
  introData: any;
  moveData: any;
  voteData: any;

  constructor(private data: SharedDataService,
              private pusher: PusherService) { }

  ngOnInit() {
    this.introData = this.data.getIntro();
    this.activeWindow = 'intro';

    this.pusher.channel.bind('move', data => {
      this.moveData = data;
      console.log(data);
      this.activeWindow = 'move';
    });

    this.pusher.channel.bind('vote', data => {
      this.voteData = data;
      this.activeWindow = 'vote';
    });

  }

  onSubmit() {
    this.activeWindow = this.form.value.activeWindow;
  }

}
