import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../core/data.service';
import { ICustomer, IOrder, IOrderItem } from '../shared/interfaces';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: [ './orders.component.css' ]
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer |null = null;

  constructor(private dataService: DataService, 
              private route: ActivatedRoute) { }

              ngOnInit() {
      let id = this.route.snapshot.paramMap.get('id');
        let numericId = id !== null ? +id : 0; // Use a default value like 0 or handle it appropriately
         this.dataService.getOrders(numericId).subscribe((orders: IOrder[]) => {
                  this.orders = orders;
                });
                
    this.dataService.getCustomer(numericId).subscribe((customer: ICustomer | null) => {
      this.customer = customer;
    });
   }
              


}