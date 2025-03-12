import { Component } from '@angular/core';

@Component({
  selector: 'app-bind-contador-exemplo',
  imports: [],
  templateUrl: './bind-contador-exemplo.component.html',
  styleUrl: './bind-contador-exemplo.component.css'
})
export class BindContadorExemploComponent {
  count: number = 0;
  counter(type: string) {
    // if (type === 'tira') {
    //   this.count--; // Decrementar se 'decr'
    // } else {
    //   this.count++; // Incrementar se não for 'decr'
    // }
    type === 'acres' ? this.count++ : this.count--;
  }
}
