import { Component } from '@angular/core';

@Component({
  selector: 'app-checking-shift',
  imports: [],
  templateUrl: './checking-shift.component.html',
  styleUrl: './checking-shift.component.css'
})
export class CheckingShiftComponent {
  isShift(event: any){
    if(event.shiftKey && event.key === 'Y'){
      console.log("Tecla Shift pressionada: ",event);
    }
  }
}
