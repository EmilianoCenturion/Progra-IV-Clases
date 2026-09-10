import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
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
