import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private count = 1;

  phoneNumberIds: number[] = [1];

  @ViewChild('myForm')
  private myForm: NgForm;

  constructor() {
  }

  remove(i: number) {
    this.phoneNumberIds.splice(i, 1);
  }

  add() {
    this.phoneNumberIds.push(++this.count);
  }


  printMyForm() {
    console.log(this.myForm);
  }

  register(myForm: NgForm) {
    console.log('Registration successful.');
    console.log(myForm.value);
  }
}
