import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

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
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot({login: loginReducers}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
