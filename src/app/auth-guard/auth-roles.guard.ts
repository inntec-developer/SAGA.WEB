import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../service/auth/auth.service'
import { SettingsService } from '../core/settings/settings.service';

@Injectable()
export class AuthRolesGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router, 
    public settings: SettingsService ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      var privilegios = this.settings.user.privilegios;
      if( privilegios.some( item => item.estructuraId == 4))
      {
        return true;
      }
      else
      {
        alert("No cuenta con permisos para esta seccion")
        return false;
      }
  }
}
