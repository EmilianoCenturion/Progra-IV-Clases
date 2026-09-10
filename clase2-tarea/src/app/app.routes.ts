import { Routes } from '@angular/router';
import { Home } from './componentes/home/home';
import { About } from './componentes/about/about';
import { Login } from './componentes/login/login';
import { Error } from './componentes/error/error';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "home",
        component: Home
    },
    {
        path: "about",
        component: About
    },
    {
        path: "error",
        component: Error
    },
    {
        path: "**",
        redirectTo: "error"
    } 
]
