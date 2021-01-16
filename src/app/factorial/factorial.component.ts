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
  isAnswer: boolean;

  constructor() { }

  ngOnInit():void {
    if ( this.number.value === '' ||  this.number.value === null ||  this.number.value === undefined) {
      this.isAnswer = false;
    }
  }

  count() {
    let f = 1;
    this.factorial = this.number.value;
    for(let i = 1; i <= this.factorial; i++) {
      f = f * i;
    }
    this.factorial = f;
    this.isAnswer = true;
  }

}
