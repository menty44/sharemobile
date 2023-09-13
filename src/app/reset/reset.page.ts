import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/']).then(r => r)
  }

}
