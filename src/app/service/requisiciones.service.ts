import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response, RequestOptions, Headers, HttpModule} from '@angular/Http';
import { Observer } from 'rxjs/Observer';

import { ApiConection} from './api-conection.service';

@Injectable()
export class RequisicionesService {
  private urlRequiGet = ApiConection.ServiceUrl + ApiConection.damfo290;
  constructor(private http: Http) { }

  

}
