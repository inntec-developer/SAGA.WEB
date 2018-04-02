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
private UrlEstados = ApiConection.ServiceUrl+ApiConection.filtroestados;
private UrlMunicipios = ApiConection.ServiceUrl+ApiConection.filtromunicipios;
private UrlColonias = ApiConection.ServiceUrl+ApiConection.filtrocolonias;
private UrlCandidatos = ApiConection.ServiceUrl+ApiConection.Candidatos;
private UrlCandidatoDtl = ApiConection.ServiceUrl+ApiConection.Candidatodetail;
private UrlPostulaciones = ApiConection.ServiceUrl+ApiConection.Postulaciones;
private UrlAreaExp = ApiConection.ServiceUrl+ApiConection.Areasexp;
private UrlPerfiles = ApiConection.ServiceUrl+ApiConection.Perfiles;
private UrlGeneros = ApiConection.ServiceUrl+ApiConection.Generos;
private UrlDiscapacidad = ApiConection.ServiceUrl+ApiConection.Discapacidad;
private UrlTpLicencia = ApiConection.ServiceUrl+ApiConection.TpLicencia;
private UrlNivelEstudios = ApiConection.ServiceUrl+ApiConection.NivelEstudio;
private UrlIdiomas = ApiConection.ServiceUrl+ApiConection.Idiomas;

// Error.
private handleError(error: any) {
       console.log('sever error:', error);
       if (error instanceof Response) {
           return Observable.throw(error.json().error || 'backend server error');
       }
       return Observable.throw(error || 'backend server error');
   }

constructor(private http: Http) {  }

// Servicios de controller de candidatos.

getpaises(): Observable<any> { // Obtener filtro de paises.
   return this.http.get(this.UrlPaises)
       .map(result => result.json())
       .catch(this.handleError);
}

getestados(pais: string): Observable<any> { // Obtener filtro de estados.
   return this.http.get(this.UrlEstados + '?Pais=' + pais)
       .map(result => result.json())
       .catch(this.handleError);
}

getmunicipios(estado: string): Observable<any> { // Obtener filtro de municipios.
   return this.http.get(this.UrlMunicipios + '?Estado=' + estado)
       .map(result => result.json())
       .catch(this.handleError);
}

getcolonias(municipio: string): Observable<any> { // Obtener filtro de colonias.
   return this.http.get(this.UrlColonias + '?Municipio=' + municipio)
       .map(result => result.json())
       .catch(this.handleError);
}

getcandidatos(): Observable<any> { // Obtener filtro de colonias.
   return this.http.get(this.UrlCandidatos)
       .map(result => result.json())
       .catch(this.handleError);
}

getcandidatodtl(Id: any): Observable<any> { // Obtener filtro de colonias.
   return this.http.get(this.UrlCandidatoDtl + '?Id='+ Id)
       .map(result => result.json())
       .catch(this.handleError);
}

getpostulaciones(Id: any): Observable<any> { // Obtenemos las postulaciones del candidato.
   return this.http.get(this.UrlPostulaciones + '?IdCandidato='+ Id)
       .map(result => result.json())
       .catch(this.handleError);
}

getareasexp(): Observable<any> { // Obtener filtro de areas de experiencia.
   return this.http.get(this.UrlAreaExp)
       .map(result => result.json())
       .catch(this.handleError);
}

getperfiles(): Observable<any> { // Obtener filtro de areas de perfiles.
   return this.http.get(this.UrlPerfiles)
       .map(result => result.json())
       .catch(this.handleError);
}

getgeneros(): Observable<any> { // Obtener filtro de areas de generos.
   return this.http.get(this.UrlGeneros)
       .map(result => result.json())
       .catch(this.handleError);
}

getdiscapacidad(): Observable<any> { // Obtener filtro de areas de Discapacidad.
   return this.http.get(this.UrlDiscapacidad)
       .map(result => result.json())
       .catch(this.handleError);
}

gettplicencia(): Observable<any> { // Obtener filtro de areas de tplicencia.
   return this.http.get(this.UrlTpLicencia)
       .map(result => result.json())
       .catch(this.handleError);
}

getnivelestudio(): Observable<any> { // Obtener filtro de areas de nivel estudio.
   return this.http.get(this.UrlNivelEstudios)
       .map(result => result.json())
       .catch(this.handleError);
}

getidiomas(): Observable<any> { // Obtener filtro de idiomas.
   return this.http.get(this.UrlIdiomas)
       .map(result => result.json())
       .catch(this.handleError);
}

}
