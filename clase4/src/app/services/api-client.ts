import { Service } from '@angular/core';

@Service()
export class ApiClient {
    usernames = ["usuario-1", "usuario-2", "usuario-3", "usuario-4"]

    async getUsuario(username: string) {
        await new Promise(resolve => setTimeout(resolve, 1500))

        const usuarioEncontrado = this.usernames.find((e) => e === username);

        return usuarioEncontrado || null;
    }
}
