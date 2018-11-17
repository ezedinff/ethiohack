import {Injectable} from '@angular/core';
import {ConfigService} from '../../../app-config.service';
import {NotificationService} from './notification.service';
import {Observable} from 'rxjs';

@Injectable()
export class HttpResponseHandler {
  constructor(
    private configService: ConfigService,
    private notificationService: NotificationService) {}
  /**
   * Global error handler
   */
  public onCatch(response: any): Observable<any> {
    switch (response.status) {
      case 400:
        this.handleBadRequest(response);
        break;
      case 401:
        this.handleUnauthorized(response);
        break;
      case 403:
        this.handleForbidden(response);
        break;
      case 404:
        this.handleNotFound(response);
        break;
      case 500:
        this.handleServerError(response);
        break;
      default:
        break;
    }
    return Observable.throw(response);
  }

  private handleBadRequest(responseBody: any): void {
    if (responseBody._body) {
      try {
        this.handleErrorMessages(responseBody);
      } catch (error) {
        this.handleServerError(responseBody);
      }
    } else {
      this.handleServerError(responseBody);
    }
  }

  private handleUnauthorized(responseBody: any): void {
    this.showNotificationError(responseBody.error.error.message);
    location.assign('http://localhost:4200');
  }

  private handleForbidden(response): void {
    this.showNotificationError(response.error.error.message); // Todo create list of error message in separate file
  }

  private handleNotFound(response): void {
    this.showNotificationError(response.error.error.message);
  }

  private handleServerError(response) {
    this.showNotificationError(response.error.error.message);
  }

  private handleErrorMessages(response: any) {
    if (!response) {
      return;
    }
    this.showNotificationError(response.error.error.message); // Todo get the message from response object don't leave it like this
  }

  private showNotificationError(message: string) {
    this.notificationService.error(message);
  }

}
