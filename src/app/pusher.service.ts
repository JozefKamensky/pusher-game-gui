import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
// import * as Pusher from '../../node_modules/pusher-js/dist/node/pusher.js';
import * as Pusher from '../../node_modules/pusher-js';

@Injectable()
export class PusherService {
  pusher: any;
  channel: any;
  constructor() {
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      encrypted: true
    });
  }

  subscribeToChannel(channelName: String) {
    this.channel = this.pusher.subscribe(channelName);
  }

}
