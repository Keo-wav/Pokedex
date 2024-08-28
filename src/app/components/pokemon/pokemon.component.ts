import { NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [NgIf],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: any = {};

  constructor() {}
  
  ngOnInit() {}
}
