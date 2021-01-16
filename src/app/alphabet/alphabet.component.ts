import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.scss']
})
export class AlphabetComponent implements OnInit {
  
  str = new FormControl('');
  maxChar: string;
  isChar: boolean;

  constructor() { }

  ngOnInit(): void {
    if ( this.str.value === '' ||  this.str.value === null ||  this.str.value === undefined) {
      this.isChar = false;
    }
  }

  findCount() {
    var max = 0;
    this.maxChar = '';
    this.str.value.split('').forEach( char => {
      if(this.str.value.split(char).length > max) {
          max = this.str.value.split(char).length;
          this.maxChar = char;
          this.isChar = true;
        }
    });
  }

}
