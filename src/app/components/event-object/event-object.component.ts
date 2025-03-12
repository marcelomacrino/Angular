import { Component } from '@angular/core';

@Component({
  selector: 'app-event-object',
  imports: [],
  templateUrl: './event-object.component.html',
  styleUrl: './event-object.component.css'
})
export class EventObjectComponent {
  // umaTeclaPressionada(e: any) {
  //   console.log(e.target.value);
  // }
  onClick(e: MouseEvent, msg:string, num:Number){
    console.log('Evento: ', e);
    console.log('Mensagem: ', msg);
    console.log('Numero: ', num);
  }
}
