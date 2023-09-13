import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public items: any[] = []
  constructor() { }

  ngOnInit() {
    this.items = [
      {name: "Products"},
      {name: "Cart Orders"},
      {name: "Coupons"},
      {name: "Customers"},
      {name: "Impressions"},
      {name: "Team Members"},
      {name: "Settings"},
      {name: "Customer Care"},
    ]
  }



}
