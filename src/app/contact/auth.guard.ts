import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  router: Router = null;
  accountService: AccountService;

  constructor(router: Router, accountService: AccountService) {
    // przypisanie referencji router do zmiennej klasowej
    this.router = router;
    this.accountService = accountService;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.accountService.imie === '' || this.accountService.nazwisko === '' || this.accountService.emaill === '') {
      this.router.navigate(['/kontakt']);
      return false;
    } else {
      return true;
    }
  }
}