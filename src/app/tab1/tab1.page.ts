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
      {name: "Catalogues", path: "products", image: "prod.png"},
      {name: "Products", path: "products", image: "catalogues.png"},
      {name: "Cart Orders", path: "orders", image: "trolley.png"},
      {name: "Coupons", path: "coupons", image: "coupon.png"},
      {name: "Customers", path: "customers", image: "rating.png"},
      {name: "Sale Leads", path: "saleleads", image: "sale.png"},
      {name: "Impressions", path: "impressions", image: "imp.png"},
      {name: "My Team", path: "team", image: "team.png"},
      {name: "Settings", path: "settings", image: "gears.png"},
      {name: "Support", path: "support", image: "customer-service.png"},
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

  logout() {
    this.router.navigate([`/`]).then(r => r)
  }

}
