import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bmx-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  @Input() race;

  constructor() { }

  ngOnInit() {
  }

}
