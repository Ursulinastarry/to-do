import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NameValidator } from './nameValidator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  jobForm: FormGroup;

  constructor(private fb: FormBuilder, private nameValidator: NameValidator) {
    console.log('LoginComponent loaded');

    this.jobForm = this.fb.group({
      fullName: ['', [Validators.required], [this.nameValidator.checkNameExists()]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.jobForm.valid) {
      console.log('Form Submitted:', this.jobForm.value);
      this.jobForm.reset();
    } else {
      console.log('Form is invalid');
    }
  }
  showAdditionalInfo = false;

  toggleAdditionalInfo() {
    this.showAdditionalInfo = !this.showAdditionalInfo;
  }
}


