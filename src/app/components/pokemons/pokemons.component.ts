import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { PokemonComponent } from "../pokemon/pokemon.component";

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe, PokemonComponent],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent {
  pokemons = [
    {
      id:1,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      name: 'Bulbasaur',
      category: 'Seed',
      type: ['Grass', 'Poison'],
      height: 70,
      weight: 6.9
    },
    {
      id:2,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      name: 'Ivysaur',
      category: 'Seed',
      type: ['Grass', 'Poison'],
      height: 100,
      weight: 13
    },
    {
      id:3,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      name: 'Venusaur',
      category: 'Seed',
      type: ['Grass', 'Poison'],
      height: 200,
      weight: 100
    },
    {
      id:4,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      name: 'Charmander',
      category: 'Lizard',
      type: 'Fire',
      height: 60,
      weight: 8.5
    },
    {
      id:5,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      name: 'Charmeleon',
      category: 'Flame',
      type: 'Fire',
      height: 110,
      weight: 19
    },
    {
      id:6,
      img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      name: 'Charizard',
      category: 'Flame',
      type: 'Flying',
      height: 170,
      weight: 90.5
    }
  ]
}
