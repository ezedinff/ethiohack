import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GenericValidator} from '../../validators/generic-validator';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  private readonly validationMessages: { [key: string]: {[key: string]: string}};
  private genericValidators: GenericValidator;
  @Output() login = new EventEmitter();
  @Input() loading: boolean;
  @Input() errorMessage: string;
  @Input() successMessage: string;
  displayMessage: { [p: string]: string } = {};
  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      email: {required: 'Please enter the username'},
      password: {required: 'Please enter the password'}
    };
    this.genericValidators = new GenericValidator(this.validationMessages);
  }

  ngOnInit() {
    this.crateForm();
    console.log(this.errorMessage);
  }
  crateForm () {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginForm.valueChanges.subscribe(v => this.displayMessage = this.genericValidators.processMessages(this.loginForm));
  }
  // Also validate on blur
  // Helpful if the user tabs through required fields
  blur(): void {
    this.displayMessage = this.genericValidators.processMessages(this.loginForm);
  }
  submit() {
    this.login.next(this.loginForm.value);
  }
}
