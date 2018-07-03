import 'rxjs/add/operator/map'

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ApiConection } from './../api-conection.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SettingsService } from '../../core/settings/settings.service';

@Injectable()
export class AuthService {
  IdUser;
  private UrlGetSession = ApiConection.ServiceUrl+ApiConection.getSession;

  constructor(private http: HttpClient, public settings: SettingsService) { }

  login(email: string, password: string): Observable<any>
  {
    return this.http.get(this.UrlGetSession + '?p='+ password + '&e=' + email)
    .map(user => {
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.settings.user.name = 'DAMSA.NINIGUEZ'
        }
        return user;
      }); 
  }

  logout() {
    // remove user from local storage to log user out
  
    localStorage.removeItem('currentUser');
}

public isAuthenticated() : boolean
{
  if( localStorage.getItem('usuario') != null)
  {
    return true;
  }
  else
  {
    return false;
  }
}


}
