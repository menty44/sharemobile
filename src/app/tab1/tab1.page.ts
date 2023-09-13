import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public items: any[] = [];
  showMenu = false;

  constructor(public router: Router) { }

  ngOnInit() {
    this.items = [
      {name: "Products", path: "products"},
      {name: "Cart Orders", path: "orders"},
      {name: "Coupons", path: "coupons"},
      {name: "Customers", path: "customers"},
      {name: "Sale Leads", path: "saleleads"},
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

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  menuItem1Action() {
    // Implement your action for menu item 1
  }

  menuItem2Action() {
    // Implement your action for menu item 2
  }

}
