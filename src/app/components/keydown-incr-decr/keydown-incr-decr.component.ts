import { Component } from '@angular/core';

@Component({
  selector: 'app-keydown-incr-decr',
  imports: [],
  templateUrl: './keydown-incr-decr.component.html',
  styleUrl: './keydown-incr-decr.component.css'
})
export class KeydownIncrDecrComponent {
  counter : number = 0;
  oneKeyDown(event: KeyboardEvent) {
    if(event.key === "ArrowUp") {
      this.counter++;
    } else if(event.key === "ArrowDown") {
      this.counter--;
    }
  }
}
