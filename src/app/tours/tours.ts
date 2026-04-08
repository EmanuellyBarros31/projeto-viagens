import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tours',
  imports: [CommonModule],
  templateUrl: './tours.html',
  styleUrls: ['./tours.css'],
  standalone: true
})
export class Tours {
  tours = [
    { img: 'img1.png', pais: 'Paris, France', descricao: 'Centipede Tour - Guided Arizona Desert Tour by ATV ', avaliacao: '4.8(234)', preco: '$ 150.00' },
    { img: 'img2.png', pais: 'Rome, Italy', descricao: 'Colosseum Underground Tour with Gladiator School', avaliacao: '4.9(567)', preco: '$ 120.00' },
    { img: 'img3.png', pais: 'Tokyo, Japan', descricao: 'Tokyo Food Tour - Tsukiji Market and Street Food', avaliacao: '4.7(890)', preco: '$ 80.00' },
    { img: 'img4.png', pais: 'New York, USA', descricao: 'Statue of Liberty and Ellis Island Tour', avaliacao: '4.6(345)', preco: '$ 60.00' },
    { img: 'img5.png', pais: 'Sydney, Australia', descricao: 'Sydney Opera House Tour and Harbour Cruise', avaliacao: '4.8(123)', preco: '$ 100.00' },
    { img: 'img6.png', pais: 'Rio de Janeiro, Brazil', descricao: 'Christ the Redeemer and Sugarloaf Mountain Tour', avaliacao: '4.9(456)', preco: '$ 90.00' },
    { img: 'img7.png', pais: 'Cairo, Egypt', descricao: 'Pyramids of Giza and Sphinx Tour', avaliacao: '4.7(789)', preco: '$ 110.00' },
    { img: 'img9.png', pais: 'Barcelona, Spain', descricao: 'Sagrada Familia and Park Güell Tour', avaliacao: '4.8(234)', preco: '$ 70.00' },
 
  ]






}
