import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu }from './menu/menu';
import { SectionCenter } from './section-center/section-center';
import { Carrosel } from './carrosel/carrosel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu , SectionCenter ,Carrosel] ,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-viagens');
}
