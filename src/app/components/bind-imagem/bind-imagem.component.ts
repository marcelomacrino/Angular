import { Component } from '@angular/core';

@Component({
  selector: 'app-bind-imagem',
  imports: [],
  templateUrl: './bind-imagem.component.html',
  styleUrl: './bind-imagem.component.css'
})
export class BindImagemComponent {
  imagemUrl = '/transferir.jpeg'; // URl da imagem padrão
  imagemAlternativaUrl = '/images.jpeg'; // URL da imagem alternativa
  exibirImagemAlternativa = false; // Controla qual imagem exibir

  alternarImagem() {
    this.exibirImagemAlternativa = !this.exibirImagemAlternativa;
  }
}
