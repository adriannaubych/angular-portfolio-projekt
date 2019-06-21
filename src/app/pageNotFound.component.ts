import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'page-not-found',
  template: `<h1>Nie znaleziono strony o podanym adresie URL. PEACE!</h1>`,
  styles: [`@import url('https://fonts.googleapis.com/css?family=Caveat|Julius+Sans+One|Open+Sans+Condensed:300,300i,700|Pacifico|Shadows+Into+Light+Two&display=swap&subset=latin-ext'); h1{font-family: 'Caveat', cursive;}`]
})
export class PageNotFoundComponent {

  constructor(router: Router) { 
    setTimeout(() => router.navigate(['']), 3000);
  }
}