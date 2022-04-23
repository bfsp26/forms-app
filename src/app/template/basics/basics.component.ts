import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  valid_name(): boolean {
    return this.myForm?.controls['product']?.invalid && this.myForm?.controls['product'].touched;
  }

  valid_price(): boolean {
    return this.myForm?.controls['product_price']?.value < 0 && this.myForm?.controls['product_price'].touched;
  }

  save() {
    console.log(this.myForm);
    this.myForm.resetForm();
  }

}
