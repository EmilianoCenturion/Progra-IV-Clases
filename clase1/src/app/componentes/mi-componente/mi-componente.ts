import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mi-componente',
  imports: [FormsModule],
  templateUrl: './mi-componente.html',
  styleUrl: './mi-componente.css',
})
export class MiComponente {

  edadUno: number = 0;
  edadDos: number = 0;

  constructor() {
    console.log("MiComponente constructor");
    
  }

  sumar() {
    return this.edadUno + this.edadDos;
  }

  promedio() {
  return (this.edadDos + this.edadUno) / 2;    
  }
}
