import { Component } from '@angular/core';

@Component({
  selector: 'app-bind-event',
  imports: [],
  templateUrl: './bind-event.component.html',
  styleUrl: './bind-event.component.css'
})
export class BindEventComponent {
  display(msg:string) {
    alert (msg);
  }
}
