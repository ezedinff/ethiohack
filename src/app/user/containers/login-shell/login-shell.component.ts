import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {Credential} from '../../interfaces/credential';

@Component({
  selector: 'app-login-shell',
  templateUrl: './login-shell.component.html',
  styleUrls: ['./login-shell.component.scss']
})
export class LoginShellComponent implements OnInit {
  loading$: Observable<boolean>;
  errorMessage$: Observable<string>;
  successMessage$: Observable<string>;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loading$ = this.authService.loading$;
    this.errorMessage$ = this.authService.errorMessage$;
    this.successMessage$ = this.authService.successMessage$;
  }
  login(credentials: Credential) {
    this.authService.login(credentials);
  }
}
