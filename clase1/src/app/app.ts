import { Component, signal } from '@angular/core';
import { MiComponente } from './componentes/mi-componente/mi-componente';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [MiComponente, NgIf, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
[x: string]: any;
  
}

