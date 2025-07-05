import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import { JogarComponent } from './components/jogar/jogar.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "configuracoes",
        component: ConfiguracoesComponent
    },
    {
        path: "jogar",
        component: JogarComponent
    }
];
