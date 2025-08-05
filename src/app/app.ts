import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecetasComponent } from './components/recetas/recetas.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecetasComponent, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('maestropizza-amin');
}
