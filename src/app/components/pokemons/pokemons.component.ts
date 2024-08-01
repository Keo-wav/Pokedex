import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  pokemons = [
    {
      id:1,
      name: 'Bulbasaur',
      category: 'Seed',
      type: ['Plant', 'Poison'],
      height: 70,
      weight: 6.9
    },
    {
      id:2,
      name: 'Ivysaur',
      category: 'Seed',
      type: ['Plant', 'Poison'],
      height: 100,
      weight: 13
    },
    {
      id:3,
      name: 'Venusaur',
      category: 'Seed',
      type: ['Plant', 'Poison'],
      height: 200,
      weight: 100
    },
    {
      id:4,
      name: 'Charmander',
      category: 'Lizard',
      type: 'Fire',
      height: 60,
      weight: 8.5
    },
    {
      id:5,
      name: 'Charmeleon',
      category: 'Flame',
      type: 'Fire',
      height: 110,
      weight: 19
    },
    {
      id:6,
      name: 'Charizard',
      category: 'Flame',
      type: 'Flight',
      height: 170,
      weight: 90.5
    }
  ]
}
