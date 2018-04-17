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
private UrlGeneral = ApiConection.ServiceUrl+ApiConection.getGeneral;
private UrlContrato = ApiConection.ServiceUrl+ApiConection.getContrato;
private UrlPuestoReclutar = ApiConection.ServiceUrl+ApiConection.getPuestoReclutar;
private UrlHorario = ApiConection.ServiceUrl+ApiConection.getHorario;
private Urlsueldo = ApiConection.ServiceUrl+ApiConection.getsueldo;
private UrlOtros = ApiConection.ServiceUrl+ApiConection.getOtros;
private UrlActividad = ApiConection.ServiceUrl+ApiConection.getActividad;
private UrlBeneficio = ApiConection.ServiceUrl+ApiConection.getBeneficio;
private UrlDireccion = ApiConection.ServiceUrl+ApiConection.getDireccion;
private UrlTelefono = ApiConection.ServiceUrl+ApiConection.getTelefono;

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
   return this.http.get(this.UrlGeneral + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

getContrato(RequiID:string): Observable<any> {
   return this.http.get(this.UrlContrato + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

getPuestoReclutar(RequiID:string): Observable<any> {
   return this.http.get(this.UrlPuestoReclutar + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

getHorario(RequiID:string): Observable<any> {
   return this.http.get(this.UrlHorario + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

getsueldo(RequiID:string): Observable<any> {
   return this.http.get(this.Urlsueldo + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

getOtros(RequiID:string): Observable<any> {
   return this.http.get(this.UrlOtros + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}


getActividad(RequiID:string): Observable<any> {
   return this.http.get(this.UrlActividad + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

getDireccion(RequiID:string): Observable<any> {
   return this.http.get(this.UrlDireccion + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

getTelefono(RequiID:string): Observable<any> {
   return this.http.get(this.UrlTelefono + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

getBeneficio(RequiID:string): Observable<any> {
   return this.http.get(this.UrlBeneficio + '?Requi='+RequiID)
       .map(result => result.json())
       .catch(this.handleError);
}

}
