
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiConection } from './../api-conection.service';
import { SettingsService } from '../../core/settings/settings.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'



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
          this.settings.user.privilegios = user;      
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
  console.log(this.settings.user.name)
  if( this.settings.user.name != '')
  {
    return true;
  }
  else
  {
    return false;
  }
}

}
