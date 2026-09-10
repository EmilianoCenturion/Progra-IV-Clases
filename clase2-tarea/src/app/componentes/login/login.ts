import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  imports: [FormsModule, NgIf],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  usuario = "";
  contrasena = "";

  error = false;

  constructor(private router: Router) {
  }

  login() {
    if (this.usuario === "admin" && this.contrasena === "123456") {
      this.error = false;
      this.router.navigate(["/home"])
    } else {
      this.error = true;
    }
  }
}
