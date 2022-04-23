import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favorites: this.formBuilder.array([
      ['Mario Bros', [Validators.required]],
      ['Metal Slug', [Validators.required]]
    ], Validators.required)
  });

  newFavorite: FormControl = this.formBuilder.control('', Validators.required);

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  validField(fieldName: string) {
    return this.myForm.controls[fieldName].errors && this.myForm.controls[fieldName].touched;
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
  }

  deleteGame(i: number) {
    this.favoritesArr.removeAt(i);
  }

  addFavorite() {
    if (this.newFavorite.invalid) {
      return;
    }

    // this.favoritesArr.push(new FormControl(this.newFavorite.value, Validators.required));
    this.favoritesArr.push(this.formBuilder.control(this.newFavorite.value, [Validators.required, Validators.minLength(3)]))

    this.newFavorite.reset();
  }

}
