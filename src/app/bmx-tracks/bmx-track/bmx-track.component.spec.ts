import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxTrackComponent } from './bmx-track.component';

describe('BmxTrackComponent', () => {
  let component: BmxTrackComponent;
  let fixture: ComponentFixture<BmxTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmxTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
