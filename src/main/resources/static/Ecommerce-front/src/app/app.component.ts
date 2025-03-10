import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet, FormsModule, CommonModule], // Adicione o CommonModule aqui
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
email: string = '';
password: string = '';
errorMessage: string = '';

constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        // Exibe um alerta de sucesso (usando SweetAlert2)
        Swal.fire({
          icon: 'success',
          title: 'Login realizado com sucesso!',
          showConfirmButton: false,
          timer: 1500 // Fecha o alerta automaticamente após 1,5 segundos
        });
        this.router.navigate(['/']); // Redireciona para a página inicial
      },
      error: (err) => {
        if (err.status === 401) {
          this.errorMessage = 'E-mail ou senha incorretos.';
        } else if (err.status === 404) {
          this.errorMessage = 'Usuário não encontrado. Por favor, cadastre-se.';
        } else {
          this.errorMessage = 'Erro ao realizar o login. Tente novamente.';
        }
      }
    });
  }
}
