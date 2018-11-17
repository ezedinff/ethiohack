import {Component} from '@angular/core';

@Component({
  selector: 'request-list',
  template: '<mat-card style="height: 100vh;">' +
    '<mat-list>' +
    '<mat-list-item *ngFor="let item of items">' +
    '<request-list-item ></request-list-item>' +
    '</mat-list-item>' +
    '</mat-list>' +
    '</mat-card>'
})
export class RequestListComponent {
  items  = ['item 1', 'item 2'];
}
