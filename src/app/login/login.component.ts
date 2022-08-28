import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, pipe } from 'rxjs';
import { login } from '../models/login.model';
import { PracticesService } from '../services/practices.service';
import { loginActionSuccess, loginActionFailed } from './state/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 success$ : Observable<any>;
 msg: any
  constructor(private store: Store<{login: any}>) {
    this.success$ = this.store.select('login');
  }
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  ngOnInit(): void {
    this.success$.subscribe(ele => {
      this.msg = ele
  })
  }
  onSubmit(f: FormGroup){
    const loginStateSuccess: login = {
        success: true,
        message: 'done!!'
    };
    const loginStateFailed: login = {
      success: false,
      message: 'check your password or Email'
  }
    if(this.loginForm.getRawValue().password?.length == 6){
      this.store.dispatch(loginActionSuccess({login: loginStateSuccess}));
    }else{
      this.store.dispatch(loginActionFailed({login: loginStateFailed}));

    }
  }

}
