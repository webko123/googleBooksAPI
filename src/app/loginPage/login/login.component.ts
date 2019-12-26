import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from "@angular/router";


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {





  usernameFormControl = new FormControl('', [
    Validators.required,
    
  ]);

  matcher = new MyErrorStateMatcher();


  constructor(private router: Router) {}

  ngOnInit() {
  }

  onSubmit(){

    
    let username = this.usernameFormControl;
    if (username.valid ){
      this.router.navigate(['/home-page']);
      
    }
  }

}
