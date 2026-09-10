import { Component, signal } from '@angular/core';
import { Hijito } from '../hijito/hijito';
import { FormsModule } from '@angular/forms';
import { Hijito2 } from '../hijito2/hijito2';


@Component({
  imports: [ Hijito , FormsModule, Hijito2],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './padre.html',
})
export class Padre {

  valor = "Mi dato";
  datoDelHijoSignal: string = "";
  datoDelHijo: string = "";

  modeloDelHijo = signal("");

  cambiarValor() {
    this.valor = "Nuevo valor";
  }

  recibirDato(dato: string) {
    console.log(dato);
    this.datoDelHijo = dato;
  }

  recibirDatoSignal(dato: string) {
    this.datoDelHijoSignal = dato;
    this.valor = dato;
  }
}
