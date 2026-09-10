import { Component, OnInit, signal, input } from '@angular/core';
import { Padre } from "../padre/padre";
import { Data } from '../../servicios/data';
;

@Component({
  imports: [Padre],
  selector: 'app-abuelo',
  styleUrl: './abuelo.css',
  templateUrl: './abuelo.html',
})
export class Abuelo implements OnInit{
  datoAbuelo = signal(0);
  miDato = input<number>();

  constructor(private data: Data) {

  }

  ngOnInit(): void {
  }

  sumar() {
    this.data.incrementar();
  }
}
