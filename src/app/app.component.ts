import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { MinhaListaComponent } from "./components/minha-lista/minha-lista.component";
// import { MeuComponenteComponent } from "./components/meu-componente/meu-componente.component";
// import { AdminComponent } from "./components/admin/admin.component";
// import { UserComponent } from "./components/user/user.component";
// import { BindImagemComponent } from "./components/bind-imagem/bind-imagem.component";
// import { BindEstiloComponent } from "./components/bind-estilo/bind-estilo.component";
// import { BindEventComponent } from "./components/bind-event/bind-event.component";
// import { BindContadorExemploComponent } from "./components/bind-contador-exemplo/bind-contador-exemplo.component";
// import { BindEventTecladoComponent } from "./components/bind-event-teclado/bind-event-teclado.component";
// import { EventObjectComponent } from "./components/event-object/event-object.component";
import { BindEventTecladoComponent } from "./components/bind-event-teclado/bind-event-teclado.component";
import { CheckingShiftComponent } from "./components/checking-shift/checking-shift.component";
import { KeydownIncrDecrComponent } from "./components/keydown-incr-decr/keydown-incr-decr.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";
import { ExemploTwoBinding01Component } from "./components/exemplo-two-binding01/exemplo-two-binding01.component";
import { SimpleCartCalculationComponent } from "./components/simple-cart-calculation/simple-cart-calculation.component";

@Component({
  selector: 'app-root',
  imports: [BindEventTecladoComponent, CheckingShiftComponent, KeydownIncrDecrComponent, TwoWayBindingComponent, ExemploTwoBinding01Component, SimpleCartCalculationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 inputValue = "Hello"; 
}
