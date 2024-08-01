import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenerationsComponent } from "./components/generations/generations.component";
import { PokemonsComponent } from './components/pokemons/pokemons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenerationsComponent, PokemonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokedex';
}
