import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonComponent } from "../pokemon/pokemon.component";
import { PokemonsService } from '../../services/pokemons.service';
import { PokemonSearchForm } from '../../models/pokemon-search-form';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [NgFor, NgIf, DecimalPipe, PokemonComponent, FormsModule],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css'
})
export class PokemonsComponent implements OnInit {

  pokemons: any[] = [];
  pokemonCount: number = 0;
  selectedPokemon: any;

  pokemonSearchForm = new PokemonSearchForm('')

  constructor(private pokemonsService: PokemonsService) {

  }

  ngOnInit() {
    this.pokemons = this.pokemonsService.GetPokemons();
    this.pokemonCount = this.pokemonsService.PokemonCount();
  }

  search(name: string) {
    
  }

  cancelSearch() {
    
  }

}
