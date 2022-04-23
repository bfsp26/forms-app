import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

  person = {
    genre: '',
    notifications: true
  }

  terms_and_conditions: boolean = false;

}
