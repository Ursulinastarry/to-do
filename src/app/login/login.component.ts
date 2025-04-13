import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  jobForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    console.log('LoginComponent loaded');

    this.jobForm = this.fb.group({
      fullName: ['', [Validators.required] ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    

    });
  }
 
  onSubmit() {
    if (this.jobForm.valid) {
      console.log('Form Submitted:', this.jobForm.value);
      this.router.navigate(['/home']);
      ;
    } else {
      console.log('Form is invalid');
      this.jobForm.markAllAsTouched(); // Helps show validation errors
    }
  }
  
  showAdditionalInfo = false;

  toggleAdditionalInfo() {
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }
}


