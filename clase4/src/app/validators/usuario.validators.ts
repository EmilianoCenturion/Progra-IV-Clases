import { inject } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, ValidationErrors, ValidatorFn } from "@angular/forms"
import { ApiClient } from "../services/api-client";

/*export function clavesCoincidenValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value === "pepe") {
            return { noPuedeSerPepe: true}
        } else {
            return null;
        }
    };
}*/

export function clavesCoincidenValidator(controlACoincidir: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const valorControl = control.value;
        const valorControlCoincidir = controlACoincidir.value

        if(valorControl !== valorControlCoincidir) {
            return {losControlesNoCoinciden: true}
        } else {
            return null
        }
    };
}

export function usuarioUnicoValidator(): AsyncValidatorFn {

    const apiClient = inject(ApiClient);

    return async (control: AbstractControl): Promise <ValidationErrors | null> => {
        const usuarioEncontrado = await apiClient.getUsuario(control.value)

        if (usuarioEncontrado) {
            return { elUsuarioYaExiste: true}
        } else {
            return null
        }
    };
}