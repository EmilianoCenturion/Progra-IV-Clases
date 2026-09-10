import { Component, OnInit, signal } from '@angular/core';
import { User } from '../../modelos/user';
import { Http } from '../../servicios/http';
import { Subscription } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-lista-usuarios',
  styleUrl: './lista-usuarios.css',
  templateUrl: './lista-usuarios.html',
})
export class ListaUsuarios{

  listaUsuarios = signal<User[]>([]);
  suscription!: Subscription;

  constructor( private http: Http) {}

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((users) => {
      this.listaUsuarios.set(users);
    })
  }

  ngOnDestroy() {
    if (this.suscription) {
      this.suscription.unsubscribe();
    }
  }
}
