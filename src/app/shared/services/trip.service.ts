import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';



import { ApiService } from './api.service';
import { Trip } from '../models';

@Injectable()
export class TripService {
  constructor (
    private apiService: ApiService
  ) {}

  // 
  // list(): Observable<any> {

  // }

  get(id): Observable<Trip> {
    return this.apiService.get(id)
           .map(data => data.post);
  }

  save(trip): Observable<Trip> {
    // If we're updating an existing trip
    if (trip.id) {
      return this.apiService.put(trip._id, {trip: trip})
             .map(data => data.trip);

    // Otherwise, create a new trip
    } else {
      return this.apiService.post({trip: trip})
             .map(data => data.post);
    }
  }

  destroy(id) {
    return this.apiService.delete(id);
  }



}