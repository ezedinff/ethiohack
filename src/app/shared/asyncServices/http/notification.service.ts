import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material';

@Injectable()
export class NotificationService {
  private configSuccess: MatSnackBarConfig = {
    panelClass: ['style-success']
  };
  private configError: MatSnackBarConfig = {
    panelClass: ['style-error']
  };
  private configWarning: MatSnackBarConfig = {
    panelClass: ['style-warning']
  };
  private configInfo: MatSnackBarConfig = {
    panelClass: ['style-info']
  };
  constructor (private snackbarService: MatSnackBar) {}

  public success(message: string, action?: string) {
    this.snackbarService.open(message, action, this.configSuccess);
  }

  public error(message: string, action?: string) {
    this.snackbarService.open(message, action, this.configError);
  }

  public warning(message: string, action?: string) {
    this.snackbarService.open(message, action, this.configWarning);
  }

  public info(message: string, action?: string) {
    this.snackbarService.open(message, action, this.configInfo);
  }
}
