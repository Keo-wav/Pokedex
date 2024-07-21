import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [NgFor],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {
  generations: string[] = ['Generation I', 'Generation II', 'Generation III', 'Generation IV', 'Generation V', 'Generation VI', 'Generation VI']
}
