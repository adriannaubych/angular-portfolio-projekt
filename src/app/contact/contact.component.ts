import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AccountService } from './account.service';
import { Router } from '@angular/router';

export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'HEJ! Wprowadź e-maila, bo nie dostaniesz odpowiedzi' :
      this.email.hasError('email') ? 'To nie wygląda na e-maila!' :
        '';
  }

  selectedValue: string;
  categories: Category[] = [
    { value: 'fashion-0', viewValue: 'Fashion' },
    { value: 'portret-1', viewValue: 'Portret' },
    { value: 'glamour-2', viewValue: 'Glamour' },
    { value: 'nagość zakryta-1', viewValue: 'Nagość zakryta' },
    { value: 'make-up/stylizacja-1', viewValue: 'Make-up/Stylizacja' }
  ];

  startDate = new Date(1990, 0, 1);

  cities = new FormControl();
  cityList: string[] = ['Poznań', 'Warszawa', 'Wrocław', 'Gdańsk', 'Szczecin', 'Kraków', 'Katowice', 'Lublin'];

  imie: string = '';
  nazwisko: string = '';
  emaill: string = '';
  tel: string = '';
  router: Router = null;
  accountService: AccountService;

  constructor(router: Router, accountService: AccountService) {
    this.router = router;
    this.accountService = accountService;
  }

  handleLogin(): void {
    this.accountService.imie = this.imie;
    this.accountService.nazwisko = this.nazwisko;
    this.accountService.emaill = this.emaill;
    this.accountService.tel = this.tel;
    this.router.navigate(['/wypelnionyformularz']);
    console.log(this.accountService.imie);
  }
}