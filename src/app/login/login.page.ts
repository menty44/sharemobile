import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  login(){
    this.router.navigate(['/dashboard']).then(r => r)
  }
  reset(){
    this.router.navigate(['/reset']).then(r => r)
  }

  register(){
    this.router.navigate(['/register']).then(r => r)
  }
}
