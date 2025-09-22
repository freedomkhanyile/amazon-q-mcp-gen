import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../shared/components/button/button.component';
import { InputComponent } from '../shared/components/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  loginForm: FormGroup;

  // Image assets from Figma
  readonly backgroundImage = 'http://localhost:3845/assets/54c011dd20873d8f6f070ee22bf73bfaa1fe8ad3.png';
  readonly logoMask = 'http://localhost:3845/assets/763e1325270a2305031eb00517a5d01bb70c7199.svg';
  readonly logoImage = 'http://localhost:3845/assets/6eb1e6883a655c523c70cfc4ccc7a96adf1eb55e.svg';

  constructor(private readonly fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      staffNumber: ['', [Validators.required]],
      pin: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}