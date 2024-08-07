import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const user = { username: this.username, password: this.password, email: this.email };
    this.authService.register(user).subscribe(response => {
      this.router.navigate(['/login']);
    }, error => {
      console.error('Registration error', error);
    });
  }
}
