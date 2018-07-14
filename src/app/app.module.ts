import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatCardModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatTabsModule,
} from '@angular/material';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    // Material modules
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
