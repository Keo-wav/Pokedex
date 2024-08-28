import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: any = {};
  @Output() imageClickEvent = new EventEmitter;
  
  constructor() {}
  
  ngOnInit() {}

  imageClick(name: any) {
    this.imageClickEvent.emit(name)
  }
}
