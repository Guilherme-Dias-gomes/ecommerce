import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component'; // Importe o novo componente
import { authGuard } from './auth.guard';

export const routes: Routes = [
{ path: '', component: AppComponent, canActivate: [authGuard] }, // Rota protegida
{ path: 'login', component: AppComponent },
{ path: 'cadastro', component: CadastroComponent }, // Nova rota para cadastro
{ path: '**', redirectTo: '' } // Rota de fallback
];
