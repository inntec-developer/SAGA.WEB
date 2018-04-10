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
export class CatalogoConfiguracionService {
// Url de servicios.
private Url = ApiConection.ServiceUrl+ApiConection.getGeneral;
private Url2 = ApiConection.ServiceUrl+ApiConection.getContrato;
private Url3 = ApiConection.ServiceUrl+ApiConection.getPuestoReclutar;
private Url4 = ApiConection.ServiceUrl+ApiConection.getHorario;
private Url5 = ApiConection.ServiceUrl+ApiConection.getsueldo;
private Url6 = ApiConection.ServiceUrl+ApiConection.getOtros;

// Error.
private handleError(error: any) {
       console.log('sever error:', error);
       if (error instanceof Response) {
           return Observable.throw(error.json().error || 'backend server error');
       }
       return Observable.throw(error || 'backend server error');
   }

constructor(private http: Http) {  }

getGeneral(RequiID:string): Observable<any> {
   return this.http.get(this.Url + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

getContrato(RequiID:string): Observable<any> {
   return this.http.get(this.Url2 + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

getPuestoReclutar(RequiID:string): Observable<any> {
   return this.http.get(this.Url3 + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

getHorario(RequiID:string): Observable<any> {
   return this.http.get(this.Url4 + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

getsueldo(RequiID:string): Observable<any> {
   return this.http.get(this.Url5 + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

getOtros(RequiID:string): Observable<any> {
   return this.http.get(this.Url6 + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

}
