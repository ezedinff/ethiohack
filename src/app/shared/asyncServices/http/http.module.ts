import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpService} from './http.service';
import {NotificationService} from './notification.service';
import {HttpResponseHandler} from './http-response-handler';

@NgModule({
  imports: [CommonModule]
})
export class HttpServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HttpServiceModule,
      providers: [
        HttpService,
        HttpResponseHandler,
        NotificationService
      ]
    };
  }
}
