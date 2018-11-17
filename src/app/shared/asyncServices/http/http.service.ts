import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../../../app-config.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpResponseHandler} from './http-response-handler';
@Injectable()
export class HttpService {
  private httpHeaders = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  });
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private httpResponseHandler: HttpResponseHandler) {}

  getBaseUrl() {
    return this.configService.get('api').baseUrl;
  }

  createUrl(url: string) {
    return `${this.getBaseUrl()}${url}`;
  }

  get(url: string): Observable<any> {
    return this.http.get(this.createUrl(url), {headers: this.httpHeaders}).pipe(
      map(res => this.handleReponse(res)),
      catchError(err => this.httpResponseHandler.onCatch(err))
    );
  }
  post(url: string, body: any): Observable<any> {
    return this.http.post(this.createUrl(url), body, {headers: this.httpHeaders}).pipe(
      map(res => this.handleReponse(res)),
      catchError(err => this.httpResponseHandler.onCatch(err))
    );
  }
  put(url: string, id: number, body): Observable<any> {
    return this.http.put(this.createUrl(`${url}/${id}`), body, {headers: this.httpHeaders}).pipe(
      map(res => this.handleReponse(res)),
      catchError(err => this.httpResponseHandler.onCatch(err))
    );
  }
  handleReponse(response: any) {
    if (response.status) {
        return response.data;
    }
    return response;
  }
}
