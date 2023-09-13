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
