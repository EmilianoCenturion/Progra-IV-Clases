import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../servicios/auth';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  imports: [FormsModule, RouterLink, RouterModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  username: string = "";
  password: string = "";
  loginError = signal<boolean>(false);

  constructor(private auth: Auth, private router: Router) {}

  login() {
    const ok = this.auth.login(this.username, this.password);
    
    if (ok) {
      console.log('Logueado correctamente');
      this.username = "";
      this.password = "";
      this.loginError.set(false);
      this.router.navigate(["/bienvenido"]);
    } else {
      console.log('No se puedo completar el logueo');
      this.loginError.set(true);
    }
  }
}

