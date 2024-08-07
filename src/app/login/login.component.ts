import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Asegúrate de incluir estilos si los tienes
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(response => {
      if (response) {
        // Login exitoso
        this.router.navigate(['/products']);
      } else {
        // Login fallido
        this.loginError = true;
      }
    }, error => {
      // Manejo de error
      this.loginError = true;
      console.error('Login error', error);
    });
  }
}
