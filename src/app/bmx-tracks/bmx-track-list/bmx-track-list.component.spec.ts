import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxTrackListComponent } from './bmx-track-list.component';

describe('BmxTrackListComponent', () => {
  let component: BmxTrackListComponent;
  let fixture: ComponentFixture<BmxTrackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmxTrackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxTrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
