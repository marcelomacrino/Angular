import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exemplo-two-binding01',
  imports: [FormsModule],
  templateUrl: './exemplo-two-binding01.component.html',
  styleUrl: './exemplo-two-binding01.component.css'
})
export class ExemploTwoBinding01Component {
  inputVal: string = '';
  dynamicVal : string = '';

  show() {
    this.dynamicVal = this.inputVal;
  }
}
