import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  signUpForm: any;
  checked: boolean = false;
  indeterminate: boolean = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled: boolean = false;

  constructor() {
    this.setForm(); // Calling from cunstroctor so can be generated when component reload.
  }

  ngOnInit() {
  }

  setForm() {
    // Creating FormGroup
    this.signUpForm = new FormGroup({
      fullname: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  signUp() {
  }

}
