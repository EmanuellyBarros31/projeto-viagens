import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-paises',
  imports: [CommonModule],
  templateUrl: './section-paises.html',
  styleUrl: './section-paises.css',
})
export class SectionPaises {
  tours = [
    { pais: 'Paris', tours: '500+ Tours', img: 'paris.png' },
    { pais: 'Singapura', tours: '300+ Tours', img: 'singapura.png' },
    { pais: 'Roma', tours: '400+ Tours', img: 'roma.png' },
    { pais: 'Bangkok', tours: '100+ Tours', img: 'bangkok.png' },
    { pais: 'Bali', tours: '600+ Tours', img: 'bali.png' },
    { pais: 'Phuket', tours: '200+ Tours', img: 'phuket.png' },
    { pais: 'Tokyo', tours: '700+ Tours', img: 'tokyo.png' },
    { pais: 'Cappadocia', tours: '900+ Tours', img: 'cappadocia.png' }
  ];
}