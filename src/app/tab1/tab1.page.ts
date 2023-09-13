import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public items: any[] = []
  constructor(public router: Router) { }

  ngOnInit() {
    this.items = [
      {name: "Products", path: "products"},
      {name: "Cart Orders", path: "orders"},
      {name: "Coupons", path: "coupons"},
      {name: "Customers", path: "customers"},
      {name: "Impressions", path: "impressions"},
      {name: "My Team", path: "team"},
      {name: "Settings", path: "settings"},
      {name: "Support", path: "support"},
    ]
  }

  reroute(path: any){
    console.log(path)
    this.router.navigate([`/${path}`]).then(r => r)
  }

}
