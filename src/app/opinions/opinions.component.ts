import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css']
})
export class OpinionsComponent {
  inputValue = '';
  imie = '';
  todos = ['super pf - AnnPhoto', 'Sesja w afro najlepsza - Kinga Olczak'];
  
  onClick() {
    this.todos.push(this.inputValue + ' - ' + this.imie);
    this.inputValue = '';
    this.imie = '';
  }
}