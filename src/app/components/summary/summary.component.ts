import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/order-details.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  
  constructor (private totals:OrderDetailsService){}
  customerDetails: any = [];
  customerDetailsAm: any = [];


  ngOnInit(): void {
    this.totals.showDetails().subscribe((allData)=>{
      console.log(allData);
      this.customerDetails = allData;
    this.totals.amountDetails().subscribe((allData)=>{
        console.log(allData);
        this.customerDetailsAm = allData;
      })
    })
  };
}
