import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Router, RouterModule, Routes} from '@angular/router';

import { BmxTrackComponent } from './bmx-tracks/bmx-track/bmx-track.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatToolbarModule} from '@angular/material';
import { BmxNavbarHeaderComponent } from './bmx-navbar-header/bmx-navbar-header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import { BmxTrackListComponent } from './bmx-tracks/bmx-track-list/bmx-track-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RaceListComponent } from './competion/race-list/race-list.component';
import { RaceComponent } from './competion/race/race.component';

const appRoutes: Routes = [
  { path: 'bmx-tracks', component: BmxTrackListComponent },
  { path: 'bmx-races',      component: RaceListComponent },
  { path: '**', component: BmxTrackListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BmxTrackComponent,
    BmxNavbarHeaderComponent,
    NavBarComponent,
    BmxTrackListComponent,
    CalendarComponent,
    RaceListComponent,
    RaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
