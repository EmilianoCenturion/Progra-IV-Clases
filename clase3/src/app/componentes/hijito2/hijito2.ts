import { Component, input, OnInit, signal } from '@angular/core';
import { Data } from '../../servicios/data';

@Component({
  imports: [],
  selector: 'app-hijito2',
  styleUrl: './hijito2.css',
  templateUrl: './hijito2.html',
})
export class Hijito2 implements OnInit {
  datoHijo2 = input<string>();

  datoDelAbuelo = signal(0);

  constructor(public data: Data) {
  }


  ngOnInit() {
  this.data.datosServicio.subscribe( value => {
    console.log(value);
    
    this.datoDelAbuelo.set(value);
  })
  }
}
