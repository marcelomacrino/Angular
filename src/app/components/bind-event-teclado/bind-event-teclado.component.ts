import { Component } from '@angular/core';

@Component({
  selector: 'app-bind-event-teclado',
  imports: [],
  templateUrl: './bind-event-teclado.component.html',
  styleUrl: './bind-event-teclado.component.css'
})
export class BindEventTecladoComponent {
  umaTeclaPressionada() {
    console.log('Uma tecla foi pressionada');
  }
  umaTeclaPressionadaBaixo(){
    console.log("Uma tecla pressiona baixo!!!!");
  }
  umaTeclaPressionadaBaixoEnter(){
    console.log("Uma tecla pressiona baixo e depois enter!!!!");
  }
  umaTeclaPressionadaCima(){
    console.log("Uma tecla pressiona solta!!!!");
  }
  focoCampoInput(){
    console.log("Foco em um campo!!!");
  }
  selecionar(){
    console.log("Texto foi Selecionado!!!");
  }
}
