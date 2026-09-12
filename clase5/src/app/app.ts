import { Component, signal } from '@angular/core';
import { Route, RouterModule, RouterOutlet } from '@angular/router';
import { Auth } from './servicios/auth';

@Component({
  imports: [RouterOutlet, RouterModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('clase5');

  constructor(private auth: Auth) {}

  get isAuthenticated() {
    return this.auth.getCurrentUser();
  }
}
