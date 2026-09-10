import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './componentes/navbar/navbar';
import { NgIf } from '@angular/common';

@Component({
  imports: [RouterOutlet, Navbar, NgIf],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  user = {usuario: "admin", clave: 123456}

  router = inject(Router);
}
