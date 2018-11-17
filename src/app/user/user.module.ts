import {NgModule} from '@angular/core';
import {LoginShellComponent} from './containers/login-shell/login-shell.component';
import {LoginSliderComponent} from './components/login-slider/login-slider.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule, MatProgressSpinnerModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    LoginShellComponent,
    LoginSliderComponent,
    LoginFormComponent
  ],
  exports: [
    LoginShellComponent,
    LoginSliderComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  bootstrap: [LoginShellComponent]
})
export class UserModule {}
