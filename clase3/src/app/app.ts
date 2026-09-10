import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaUsuarios } from "./componentes/lista-usuarios/lista-usuarios";

@Component({
  imports: [RouterOutlet, ListaUsuarios],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('clase3');
}

