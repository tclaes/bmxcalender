import { Component, OnInit } from '@angular/core';
import {BMX_TRACKS} from '../../data/tracks';
import {of} from 'rxjs';

@Component({
  selector: 'bmx-track-list',
  templateUrl: './bmx-track-list.component.html',
  styleUrls: ['./bmx-track-list.component.scss']
})
export class BmxTrackListComponent implements OnInit {

 tracks$ = BMX_TRACKS;

  constructor() { }

  ngOnInit() {
  }

}
