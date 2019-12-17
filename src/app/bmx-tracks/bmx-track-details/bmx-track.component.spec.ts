import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxTrackDetailsComponent } from './bmx-track-details.component';

describe('BmxTrackComponent', () => {
  let component: BmxTrackDetailsComponent;
  let fixture: ComponentFixture<BmxTrackDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmxTrackDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxTrackDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
