import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-cart-calculation',
  imports: [FormsModule],
  templateUrl: './simple-cart-calculation.component.html',
  styleUrl: './simple-cart-calculation.component.css'
})
export class SimpleCartCalculationComponent {
  quantidade: number = 1;
  precoPorItem: number = 100;

  get percoTotal() : number {
    return this.quantidade * this.precoPorItem;
  }

}
