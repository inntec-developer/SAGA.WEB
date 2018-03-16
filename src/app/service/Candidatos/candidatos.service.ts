import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

import { ApiConection } from '../api-conection.service';

@Injectable()
export class CandidatosService {
// Url de servicios.
private UrlPaises = ApiConection.ServiceUrl+ApiConection.filtropaises;

// Error.
private handleError(error: any) {
       console.log('sever error:', error);
       if (error instanceof Response) {
           return Observable.throw(error.json().error || 'backend server error');
       }
       return Observable.throw(error || 'backend server error');
   }

constructor(private http: Http) {  }

getpaises(): Observable<any> { // Obtener filtro de paises.
   return this.http.get(this.UrlPaises)
       .map(result => result.json())
       .catch(this.handleError);
}

}
