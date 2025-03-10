import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
const router = inject(Router); // Injeta o Router

// Verifica se o usuário está autenticado
const token = localStorage.getItem('token'); // Exemplo: Verifica se há um token no localStorage
if (token) {
    return true; // Permite o acesso à rota
  } else {
    router.navigate(['/login']); // Redireciona para a página de login
    return false; // Bloqueia o acesso à rota
  }
};
