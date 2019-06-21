import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css']
})
export class OpinionsComponent {
  inputValue = '';
  todos = ['super pf', 'Sesja w afro najlepsza'];
  
  onClick() {
    this.todos.push(this.inputValue);
    this.inputValue = '';
  }
}