import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { clavesCoincidenValidator, usuarioUnicoValidator } from '../../validators/usuario.validators';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-usuarios',
  styleUrl: './form-usuarios.css',
  templateUrl: './form-usuarios.html',
})
export class FormUsuarios {
  controlClave = new FormControl("", {
    validators: [Validators.required],
  });

  formUsuarios = new FormGroup( {
    nombre: new FormControl("", {
      validators: [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    }),
    apellido: new FormControl("", { 
      validators: [Validators.required],
    }),
    username: new FormControl("", { 
      validators: [Validators.required],
      asyncValidators: [usuarioUnicoValidator()],
      updateOn: "blur"
    }),
    clave: this.controlClave,
    confirmarClave: new FormControl("", {
      validators: [Validators.required, clavesCoincidenValidator(this.controlClave)],
    }),
  })

  ngOnInit() {
    /*this.formUsuarios.valueChanges.subscribe( estado => console.log(estado));*/  }

  mostrarEstado() {

    const nombre = this.formUsuarios.controls.nombre;
    
    console.log(this.formUsuarios.value);
    
  }
}
