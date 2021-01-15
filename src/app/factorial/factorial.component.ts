import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.scss']
})
export class FactorialComponent implements OnInit {

  number = new FormControl('');
  factorial: number;
  f: number;

  constructor() { }

  ngOnInit(): void {
  }

  count() {
    let f = 1;
    this.factorial = this.number.value;
    for(let i = 1; i <= this.factorial; i++) {
      f = f * i;
    }
    this.factorial = f;
  }

}
