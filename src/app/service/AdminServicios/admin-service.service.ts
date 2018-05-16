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
export class AdminServiceService {

  // Url de servicios.
  private Url = ApiConection.ServiceUrl+ApiConection.getDtosPersonal;
  private UrlTiposUsuarios = ApiConection.ServiceUrl+ApiConection.getTiposUsuarios;
  private UrlAddRol = ApiConection.ServiceUrl+ApiConection.addRol;
  private UrlAddGrupo = ApiConection.ServiceUrl+ApiConection.addGrupo;
  private UrlGetDepas = ApiConection.ServiceUrl+ApiConection.getDepartamentos;
  private UrlAddUser = ApiConection.ServiceUrl+ApiConection.addUser;
  private UrlUdActivo = ApiConection.ServiceUrl+ApiConection.udActivoUser;
  private UrlGetByDepa = ApiConection.ServiceUrl+ApiConection.getUsuariosByDepa;
  private UrlGetGrupos = ApiConection.ServiceUrl+ApiConection.GetGrupos;

  // Error.
  private handleError(error: any) {
         console.log('sever error:', error);
         if (error instanceof Response) {
             return Observable.throw(error.json().error || 'backend server error');
         }
         return Observable.throw(error || 'backend server error');
     }

  constructor(private http: Http) {

  }

  getPersonas(): Observable<any>
  {
     return this.http.get(this.Url)
         .map(result => result.json())
         .catch(this.handleError);
  }

  getDepas(): Observable<any>
  {
     return this.http.get(this.UrlGetDepas)
         .map(result => result.json())
         .catch(this.handleError);
  }

  getTipos(): Observable<any>
  {
     return this.http.get(this.UrlTiposUsuarios)
         .map(result => result.json())
         .catch(this.handleError);
  }

  getGrupos(): Observable<any>
  {
     return this.http.get(this.UrlGetGrupos)
         .map(result => result.json())
         .catch(this.handleError);
  }

  GetUsuariosByDepa(id :any): Observable<any>{
    return this.http.get(this.UrlGetByDepa + '?id='+ id)
            .map(result => result.json())
            .catch(this.handleError);
  }

  addGrupos(data: any): Observable<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.UrlAddGrupo, JSON.stringify(data), options)
            .map(result => result.json())
            .catch(this.handleError);
  }

  AddRoles(data: any): Observable<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.UrlAddRol, JSON.stringify(data), options)
            .map(result => result.json())
            .catch(this.handleError);
  }

  AddUsers(data: any): Observable<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.UrlAddUser, JSON.stringify(data), options)
            .map(result => result.json())
            .catch(this.handleError);
  }

  UDActivoUsers(id :any, v: any): Observable<any>{
    return this.http.get(this.UrlUdActivo + '?id='+ id + '&v=' + v)
            .map(result => result.json())
            .catch(this.handleError);
  }

}
