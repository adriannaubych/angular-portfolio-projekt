import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';

export interface dane {
  data?: String;
  unit?: string;
}

export interface zakres {
  name: string;
  position: number;
  activ: boolean;
}

const  ELEMENT_DATA: zakres[] = [
  {position: 1, name: 'Fashion', activ: true },
  {position: 2, name: 'Portret', activ:true},
  {position: 3, name: 'Glamour', activ:true},
  {position: 4, name: 'Akt', activ:false},
  {position: 5, name: 'Nagość zakryta', activ:true},
  {position: 6, name: 'Make up / stylizacja', activ:true},
  {position: 7, name: 'Edytorial', activ:false},
];

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})

export class DescriptionComponent {
wymiary: dane[] = [
    {name: 'Wiek', datas: 24, unit: "lata"},
    {name: 'Wzrost', datas: 164, unit: "cm"},
    {name: 'Waga', datas: 57, unit: "kg"},
    {name: 'Biust', datas: 87, unit: "cm"},
    {name: 'Talia', datas: 72, unit: "cm"},
    {name: 'Biodra', datas: 93, unit: "cm"}
  ];
wyglad: dane[] = [
    {name: 'Włosy', datas: "Za łopatki"},
    {name: 'Naturalny kolor', datas: "Ciemny blond"},
    {name: 'Obecny kolor', datas: "Ombre od naturalnego do różowego"},
    {name: 'Kolor oczu', datas: "Niebieski", unit: "cm"},
    {name: 'Odzież', datas: "M", unit: "cm"},
    {name: 'Obuwie', datas: 39, unit: "Eu"},
    {name: 'Biustonosz', datas: "70B"}
  ];

  sortedData: dane[];
  sortedData1: dane[];

  constructor() {
    this.sortedData = this.wymiary.slice();
    this.sortedData1 = this.wyglad.slice();
  }

  sortData(sort: Sort) {
    const data = this.wymiary.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'datas': return compare(a.datas, b.datas, isAsc);
        case 'unit': return compare(a.unit, b.unit, isAsc);
        default: return 0;
      }
    });
  }

  sortData1(sort1: Sort) {
    const data1 = this.wyglad.slice();
    if (!sort1.active || sort1.direction === '') {
      this.sortedData1 = data1;
      return;
    }

    this.sortedData1 = data1.sort((a, b) => {
      const isAsc = sort1.direction === 'asc';
      switch (sort1.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'datas': return compare(a.datas, b.datas, isAsc);
        case 'unit': return compare(a.unit, b.unit, isAsc);
        default: return 0;
      }
    });
  }

  displayedColumns = ['position', 'name', 'activ'];
  dataSource2 = ELEMENT_DATA;
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);}


