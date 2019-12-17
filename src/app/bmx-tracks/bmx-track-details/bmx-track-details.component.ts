import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bmx-track',
  templateUrl: './bmx-track-details.component.html',
  styleUrls: ['./bmx-track-details.component.scss']
})

export class BmxTrackDetailsComponent implements OnInit {

  @Input() track;

  constructor() { }

  ngOnInit() {
  }

}
