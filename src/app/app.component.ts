import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenerationsComponent } from "./components/generations/generations.component";
import { TestsComponent } from "./components/tests/tests.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenerationsComponent, TestsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pokedex';
}
