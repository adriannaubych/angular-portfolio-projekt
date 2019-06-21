import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sended',
  templateUrl: './sended.component.html',
  styleUrls: ['./sended.component.css']
})
export class SendedComponent {
  imie: string = '';
  nazwisko: string = '';
  emaill: string = '';
  tel: string = '';
  accountService: AccountService;
  router: Router;

  constructor(accountService: AccountService, router: Router) {
    this.imie = accountService.imie;
    this.nazwisko = accountService.nazwisko;
    this.emaill = accountService.emaill;
    this.tel = accountService.tel;

    this.accountService = accountService;
    this.router = router;
  }

  handleLogout(): void {
    this.accountService.imie = '';
    this.accountService.nazwisko = '';
    this.accountService.emaill = '';
    this.accountService.tel = '';
    this.router.navigate(['/kontakt']);
  }

}