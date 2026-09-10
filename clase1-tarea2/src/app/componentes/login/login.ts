import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  nombreIngresado: string = "";
  claveIngresada: string = "";
  
  @Input() Loguearse!: (nombre: string, clave: string) => void
}
