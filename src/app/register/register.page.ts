import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  reset(){
    this.router.navigate(['/reset'])
  }

  register(){
    this.router.navigate(['/register'])
  }
}
