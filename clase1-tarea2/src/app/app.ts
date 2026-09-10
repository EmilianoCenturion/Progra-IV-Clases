import { Component, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Usuario } from './classes/usuario';
import { Login } from './componentes/login/login';
import { Bienvenido } from './componentes/bienvenido/bienvenido';
import { Error } from './componentes/error/error';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Error, Bienvenido],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  estadoLogin = signal("pendiente")

  user = new Usuario("Emi", "123456");
  
  Loguearse(nombre: string, clave: string) {
    if(nombre === this.user.nombre && clave === this.user.clave) {
      this.estadoLogin.set("exito");
    } else {
      this.estadoLogin.set("error");
    }
  }
}
