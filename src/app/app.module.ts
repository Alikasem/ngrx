import { NgModule, ɵnoSideEffects } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { loginReducers } from './login/state/login.reducer';
import { CreateCarComponent } from './cars/create-car/create-car.component';
import { UpdateCarComponent } from './cars/update-car/update-car.component';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { practicesEffects } from './cars/cars-state/cars.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateCarComponent,
    UpdateCarComponent,
    CarsListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreModule.forRoot({login: loginReducers}),
    EffectsModule.forRoot([practicesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
