import { Component } from '@angular/core';

interface Person {
  name: string,
  favorites: Favorite[]
}

interface Favorite {
  id: number;
  name: string
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  new_game: string = '';

  person: Person = {
    name: 'Fernando',
    favorites: [
      { id: 1, name: 'Mario Bros' },
      { id: 2, name: 'Metal Slug' }
    ]
  }

  save() {
    console.log('posted form');
  }

  delete_game(index: number) {
    this.person.favorites.splice(index, 1);
  }

  add_game() {
    const new_favorite_game: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.new_game
    };
    this.person.favorites.push({...new_favorite_game});
    this.new_game = '';
  }

}
