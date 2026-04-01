import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu }from './menu/menu';
import { Banner } from './banner/banner';
import { SectionCenter } from './section-center/section-center';
import { SectionPaises } from './section-paises/section-paises';
import { Carrosel } from './carrosel/carrosel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu ,  Banner ,SectionCenter ,SectionPaises ,Carrosel] ,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-viagens');
}
