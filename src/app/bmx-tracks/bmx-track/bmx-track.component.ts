import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bmx-track',
  templateUrl: './bmx-track.component.html',
  styleUrls: ['./bmx-track.component.scss']
})

export class BmxTrackComponent implements OnInit {

  @Input() track;

  constructor() { }

  ngOnInit() {
  }

}
