import {Component, Input, OnInit} from '@angular/core';
import {PusherService} from '../pusher.service';

@Component({
  selector: 'app-vote-window',
  templateUrl: './vote-window.component.html',
  styleUrls: ['./vote-window.component.css']
})
export class VoteWindowComponent implements OnInit {
  @Input() voteData: any;
  constructor(private pusher: PusherService) { }

  ngOnInit() {
    // this.pusher.channel.bind('vote', data => {
    //   this.voteData = data;
    // });
  }

}
