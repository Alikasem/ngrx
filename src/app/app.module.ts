import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';
import { loginReducers } from './login/state/login.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({login : loginReducers})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
