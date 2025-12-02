import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  imports: [FormsModule, CommonModule],
  styleUrls: ['./login.scss'],
})
export class Login {
  showPassword = false;
  model = {
    email: '',
    password: '',
    remember: false,
  };

  constructor(private router: Router) {}

  toggleShow() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    console.log('Login ok');
    this.router.navigate(['/home']);
  }
}
