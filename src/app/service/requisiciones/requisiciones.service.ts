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
export class RequisicionesService {



<<<<<<< HEAD
  private urlGetViewDamfos = ApiConection.ServiceUrl + ApiConection.getViewDamfos;
  private urlAddress = ApiConection.ServiceUrl + ApiConection.AddressCliente;
  private urlCreateRequi = ApiConection.ServiceUrl + ApiConection.CreateRequi;
  private urlGetRequisicionById = ApiConection.ServiceUrl + ApiConection.GetRequisicionById;
=======
  private urlGetViewDamfos = ApiConection.ServiceUrl + ApiConection.GetViewDamfos;
  private urlAddress = ApiConection.ServiceUrl + ApiConection.AddressCliente;
  private urlCreateRequi = ApiConection.ServiceUrl + ApiConection.CreateRequi;
  private urlGetRequisicionById = ApiConection.ServiceUrl + ApiConection.GetRequisicionById;
  private urlGetDamfoById = ApiConection.ServiceUrl + ApiConection.Damfo290GetById;
>>>>>>> 2d4d2e780e0829ec1693f28b8cb06f194cf09067

  constructor(private http: Http) { }
  //Recupera todos los damfos que esten dados de alta y se encuentren activos
  getDamgo290(): Observable<any>{
    return this.http.get(this.urlGetViewDamfos)
      .map(result => result.json())
      .catch(this.handleError);
  }
  //REcupera las direcciones del cliente que se seleccione para generar Requisicion
  getAddress(damfoId: string): Observable<any>{
    return this.http.get(this.urlAddress + damfoId)
      .map(result => result.json())
      .catch(this.handleError);
  }
<<<<<<< HEAD

=======
  // Generea una nueva requisicion y posteriormente regresa el ID de la nueva requisicion.
>>>>>>> 2d4d2e780e0829ec1693f28b8cb06f194cf09067
  createNewRequi(data: any): Observable<any>{
    let headers = new Headers({'Content-Type' : 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.urlCreateRequi, JSON.stringify(data), options )
            .map(result => result.json())
            .catch(this.handleError);
  }
<<<<<<< HEAD

=======
  // Recupera la informacion completa de la requisicion que se requiera
>>>>>>> 2d4d2e780e0829ec1693f28b8cb06f194cf09067
  getNewRequi(requisicionId : string){
    return this.http.get(this.urlGetRequisicionById + requisicionId)
              .map(result => result.json())
              .catch(this.handleError);
  }
<<<<<<< HEAD

=======
  //Recupera la información completa del DAMFO-290 que se requiera.
  getDamfoById(damfoId: string){
    return this.http.get(this.urlGetDamfoById + damfoId)
              .map(result => result.json())
              .catch(this.handleError);
  }
  //Muestra un error en consola y regresa el mismo al Frond-End en caso de que se genere el mismo.
>>>>>>> 2d4d2e780e0829ec1693f28b8cb06f194cf09067
  public handleError(error: any ){
    console.log('Error Internar Server', error);
    if(error instanceof Response){
      return Observable.throw(error.json().error || 'Back-End server error');
    }
    return Observable.throw(error || 'Back-End server error');
  }

}
