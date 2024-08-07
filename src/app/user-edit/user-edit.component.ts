import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId!: number;
  user: any = {}; // Cambia el tipo según tu modelo de datos
  updateError: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadUser();
  }

  loadUser(): void {
    this.userService.getUserById(this.userId).subscribe(data => {
      this.user = data;
    }, (error: any) => {
      console.error('Error fetching user', error);
    });
  }

  updateUser(): void {
    this.userService.updateUser(this.userId, this.user).subscribe(() => {
      this.router.navigate(['/users']);
    }, error => {
      this.updateError = true;
      console.error('Error updating user', error);
    });
  }
}
