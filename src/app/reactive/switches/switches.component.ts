import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    genre: ['M', [Validators.required]],
    notifications: [true, [Validators.required]],
    terms: [false, [Validators.requiredTrue]]
  });

  person = {
    genre: 'F',
    notifications: true
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset({
      ...this.person,
      conditions: false
    });
  }

  save() {
    const aux = {...this.myForm.value}
    delete aux.terms;
    this.person = aux;
  }

}
