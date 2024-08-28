import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: any = {};

  constructor() {}
  
  ngOnInit() {}
}
