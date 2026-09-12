import { Component } from '@angular/core';
import { Auth } from '../../servicios/auth';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-bienvenido',
  styleUrl: './bienvenido.css',
  templateUrl: './bienvenido.html',
})
export class Bienvenido {

  constructor(private auth: Auth, private router: Router) {}

  logout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }
}
