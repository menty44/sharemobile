import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public items: any[] = []
  constructor(public router: Router) { }

  ngOnInit() {
    this.items = [
      {name: "Products", path: "products"},
      {name: "Cart Orders"},
      {name: "Coupons"},
      {name: "Customers"},
      {name: "Impressions"},
      {name: "My Team"},
      {name: "Settings"},
      {name: "Support"},
    ]
  }

  reroute(path: any){
    console.log(path)
    this.router.navigate([`/${path}`]).then(r => r)
  }

}
