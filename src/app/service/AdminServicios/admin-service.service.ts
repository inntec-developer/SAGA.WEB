import { ApiConection } from './../api-conection.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

@Injectable()
export class AdminServiceService {

  // Url de servicios.
  private Url = ApiConection.ServiceUrl+ApiConection.getDtosPersonal;
  private UrlGetEntidadesUG = ApiConection.ServiceUrl+ApiConection.getEntidadesUG;
  private UrlTiposUsuarios = ApiConection.ServiceUrl+ApiConection.getTiposUsuarios;
  private UrlAddRol = ApiConection.ServiceUrl+ApiConection.addRol;
  private UrlAddGrupo = ApiConection.ServiceUrl+ApiConection.addGrupo;
  private UrlAddUserGroup = ApiConection.ServiceUrl+ApiConection.addUserGroup;
  private UrlAddGroupRol = ApiConection.ServiceUrl+ApiConection.addGroupRol;
  private UrlGetDepas = ApiConection.ServiceUrl+ApiConection.getDepartamentos;
  private UrlAddUser = ApiConection.ServiceUrl+ApiConection.addUser;
  private UrlGetSession = ApiConection.ServiceUrl+ApiConection.getSession;
  private UrlUdActivo = ApiConection.ServiceUrl+ApiConection.udActivoUser;
  private UrlGetByDepa = ApiConection.ServiceUrl+ApiConection.getUsuariosByDepa;
  private UrlGetGrupos = ApiConection.ServiceUrl+ApiConection.GetGrupos;
  private UrlGetGruposRoles = ApiConection.ServiceUrl+ApiConection.getGruposRoles
  private UrlGetRoles = ApiConection.ServiceUrl+ApiConection.GetRoles;
  private UrlUpdateUsuario = ApiConection.ServiceUrl+ApiConection.updateUsuario;
  private UrlUpdateGrupo = ApiConection.ServiceUrl+ApiConection.updateGrupo;
  private UrlUpdateRoles = ApiConection.ServiceUrl+ApiConection.updateRoles;
  private UrlDeleteGrupo = ApiConection.ServiceUrl+ApiConection.deleteGrupo;
  private UrlDeleteRoles = ApiConection.ServiceUrl+ApiConection.deleteRoles;
  private UrlGetTreeRoles = ApiConection.ServiceUrl+ApiConection.getTreeRoles;
  private UrlGetEstructuraRoles = ApiConection.ServiceUrl+ApiConection.getEstructuraRoles;
  private UrlGetPrivilegios = ApiConection.ServiceUrl+ApiConection.getPrivilegios;
  private UrlUpdatePrivilegios = ApiConection.ServiceUrl+ApiConection.modificarPrivilegios;
  private UrlGetUsuarioByGrupo = ApiConection.ServiceUrl+ApiConection.getUsuariosByGrupo;
  private UrlDeleteUserGroup = ApiConection.ServiceUrl+ApiConection.deleteUserGroup;

  // Error.
  private handleError(error: any) {
         console.log('sever error:', error);
         if (error instanceof Response) {
             return Observable.throw(error.json().error || 'backend server error');
         }
         return Observable.throw(error || 'backend server error');
     }

  constructor(private http: Http, private httpClient: HttpClient) {

  }

  UploadImg( file: File, name: any)
  {

//  let headers = new Headers({ 
//   'Access-Control-Allow-Origin':'*', 
//   'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token'
// });
    // let options = new RequestOptions({headers: headers});
 
    const endpoint = 'http://localhost:33333/api/admin/UploadImage'
    let fd = new FormData();
    fd.append('image', file, name );
    return this.http.post( endpoint, fd )
    .subscribe(res => {console.log(res);});
  }
  

  getPersonas(): Observable<any>
  {
     return this.http.get(this.Url)
         .map(result => result.json())
         .catch(this.handleError);
  }

  GetEntidadesUG(): Observable<any>
  {
     return this.http.get(this.UrlGetEntidadesUG)
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

  getGruposRoles(): Observable<any>
  {
     return this.http.get(this.UrlGetGruposRoles)
         .map(result => result.json())
         .catch(this.handleError);
  }

  getRoles(): Observable<any>
  {
     return this.http.get(this.UrlGetRoles)
         .map(result => result.json())
         .catch(this.handleError);
  }

  GetSession(mail :any, pass: any): Observable<any>{
    return this.http.get(this.UrlGetSession + '?p='+ pass + '&e=' + mail)
            .map(result => result.json())
            .catch(this.handleError);
  }

  GetUsuarioByGrupo(GrupoId: string): Observable<any>{
    return this.http.get(this.UrlGetUsuarioByGrupo + '?id='+ GrupoId)
            .map(result => result.json())
            .catch(this.handleError);
  }
  
  GetTreeRoles(): Observable<any>
  {
     return this.http.get(this.UrlGetTreeRoles)
         .map(result => result.json())
         .catch(this.handleError);
  }

  GetEstructuraRoles(): Observable<any>
  {
     return this.http.get(this.UrlGetEstructuraRoles)
         .map(result => result.json())
         .catch(this.handleError);
  }

  GetPrivilegios( id: any): Observable<any>
  {
     return this.http.get(this.UrlGetPrivilegios + '?idUser='+ id)
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

  addUserGroup(data: any): Observable<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.UrlAddUserGroup, JSON.stringify(data), options)
            .map(result => result.json())
            .catch(this.handleError);
  }
  
  AddGroupRol(data: any): Observable<any>{
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.UrlAddGroupRol, JSON.stringify(data), options)
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

  UpdateUsuario(data: any) : Observable<any>
  {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.UrlUpdateUsuario, JSON.stringify(data), options)
            .map(result => result.json())
            .catch(this.handleError);

  }

  UpdateGrupo(data: any) : Observable<any>
  {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.UrlUpdateGrupo, JSON.stringify(data), options)
            .map(result => result.json())
            .catch(this.handleError);

  }
  UpdateRoles(data: any) : Observable<any>
  {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.UrlUpdateRoles, JSON.stringify(data), options)
            .map(result => result.json())
            .catch(this.handleError);

  }

  UpdatePrivilegios(data: any) : Observable<any>
  {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.UrlUpdatePrivilegios, JSON.stringify(data), options)
            .map(result => result.json())
            .catch(this.handleError);

  }
  DeleteGrupo(data: any) : Observable<any>
  {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.UrlDeleteGrupo, JSON.stringify(data), options)
            .map(result => result.json())
            .catch(this.handleError);

  }
  DeleteRoles(data: any) : Observable<any>
  {
    return this.http.get(this.UrlDeleteRoles + '?id=' + data)
            .map(result => result.json())
            .catch(this.handleError);
  }

  DeleteUserGroup(data: any) : Observable<any>
  {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.UrlDeleteUserGroup, JSON.stringify(data), options)
            .map(result => result.json())
            .catch(this.handleError);

  }


}
