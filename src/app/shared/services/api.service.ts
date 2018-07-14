import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';




@Injectable()
export class ApiService {
  constructor(
    private http: Http,
  ) {}

  private setHeaders(): Headers {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Basic ${environment.DB_KEY}:${environment.DB_PASSWORD}`
    };

    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
     return Observable.throw(error.json());
  }

  post(body: Object = {}): Observable<any> { 
    return this.http.post(`${environment.DB_API_URL}/travelapp/`, JSON.stringify(body), { headers: this.setHeaders() })
        .catch(this.formatErrors)
        .map((res:Response) => res.json());
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(`${environment.DB_API_URL}${path}`, { headers: this.setHeaders(), search: params })
      .catch(this.formatErrors)
      .map((res:Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put( `${environment.DB_API_URL}${path}`, JSON.stringify(body), { headers: this.setHeaders() })
        .catch(this.formatErrors)
        .map((res:Response) => res.json());
  }

  delete(path): Observable<any> {
   return this.http.delete(`${environment.DB_API_URL}${path}`, { headers: this.setHeaders() })
    .catch(this.formatErrors)
    .map((res:Response) => res.json());
}

}