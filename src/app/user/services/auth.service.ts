import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {AuthResponse} from '../interfaces/auth-response';
import {Credential} from '../interfaces/credential';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();
  private errorMessage = new BehaviorSubject(null);
  errorMessage$ = this.errorMessage.asObservable();
  private  successMessage =  new  BehaviorSubject(null);
  successMessage$ = this.successMessage.asObservable();
  private httpHeaders = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  });
  private api_url = 'http://localhost:8000/api/auth/login';
  constructor(private http: HttpClient) {}
  login(credentials: Credential) {
    this.loading.next(true);
    this.http.post<AuthResponse>(this.api_url, credentials, {headers: this.httpHeaders})
      .subscribe(res => {
        this.handleResponse(res);
        location.assign(`http://localhost:3000/home/${res['token']}`);
      },
      err => {
        this.handleError(err);
      }
      );
  }
  private handleResponse(response) {
    this.loading.next(false);
    this.errorMessage.next(null);
    this.successMessage.next('Login successful');
    return response;
  }
  private handleError(err) {
    this.errorMessage.next(err.error.error);
    this.successMessage.next(null);
    this.loading.next(false);
  }
}
