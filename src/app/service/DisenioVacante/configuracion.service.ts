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
console.log('hola mundo')
@Injectable()
export class ConfiguracionService {
// Url de servicios.
private Url = ApiConection.ServiceUrl+ApiConection.setResumen;
private Url2 = ApiConection.ServiceUrl+ApiConection.setDetalle;


// Error.
private handleError(error: any) {
       console.log('sever error:', error);
       if (error instanceof Response) {
           return Observable.throw(error.json().error || 'backend server error');
       }
       return Observable.throw(error || 'backend server error');
   }

constructor(private http: Http) {  }

SetDetalle(RequiID:string,Idcampo:number,detalle:boolean): Observable<any> {
   return this.http.get(this.Url2 + '?Requi='+RequiID+'&Idcampo='+Idcampo+'&detalle='+detalle)
       .map(result => result.json())
       .catch(this.handleError);
}

SetResumen(RequiID:string,Idcampo:number,detalle:boolean): Observable<any> {
   return this.http.get(this.Url + '?Requi='+RequiID+'&Idcampo='+Idcampo+'&resumen='+detalle)
       .map(result => result.json())
       .catch(this.handleError);
}



}
