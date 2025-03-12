import { Component } from '@angular/core';

@Component({
  selector: 'app-bind-estilo',
  imports: [],
  templateUrl: './bind-estilo.component.html',
  styleUrl: './bind-estilo.component.css'
})
export class BindEstiloComponent {
  corDeFundo = 'blue'; // Cor de fundo inicial
  tamanhoFonte = 12; // Tamanho da fonte inicial

  alternarCor() {
    this.corDeFundo = this.corDeFundo === 'blue' ? 'lightblue' : 'blue';
  }

  aumentarFonte() {
    this.tamanhoFonte += 2;
  }

  diminuirFonte() {
    this.tamanhoFonte -= 2;
  }
}
