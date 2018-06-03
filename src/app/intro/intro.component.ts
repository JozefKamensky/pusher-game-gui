import {Component, Input, OnInit} from '@angular/core';
import {SharedDataService} from '../shared-data.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  @Input() introData: any;

  constructor(private data: SharedDataService) { }

  ngOnInit() {
    // this.introData = this.data.getIntro();
  }

}
