import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule, MatListModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import {Router, RouterModule, Routes} from '@angular/router';
import {DriverShellContainer} from './containers/driver-shell/driver-shell.container';
import {AcceptedListComponent} from './components/accepted-list/accepted-list.component';
import {DeliveredListComponent} from './components/delivered-list/delivered-list.component';
import {RequestListComponent} from './components/request-list/request-list.component';
import {RequestListItemComponent} from './components/request-list-item/request-list-item.component';
const routes: Routes = [
  {path: '', component: DriverShellContainer}
];
const components = [
  DriverShellContainer,
  AcceptedListComponent,
  DeliveredListComponent,
  RequestListComponent,
  RequestListItemComponent
];
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [components],
  exports: [components, RouterModule]
})
export class DriverModule {}
