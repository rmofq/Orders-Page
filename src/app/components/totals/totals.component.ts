import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { OrderDetailsService } from 'src/app/order-details.service';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {
  
  constructor (private totals:OrderDetailsService){}
  customerDetails: any = [];
  addAmount = new FormGroup({
    totalAmount: new FormControl(''),

  });
  // count():any;

  // const total = this.customerDetails.itemDetails.reduce((sum,item)=>sum+item.quantity)
  sum:any;
  count(){
    return this.sum = this.customerDetails.map(t => t.itemDetails).reduce((acc,val)=>{
      acc + val.quantity;
    },0)
  }


  ngOnInit(): void {
    this.totals.showDetails().subscribe((allData)=>{
      console.log(allData);
      this.customerDetails = allData;
    })
  }
  SaveDataAm(){
    this.totals.saveCustomerDetailsAm(this.addAmount.value).subscribe((result)=>{console.log(result);});
  }

  // totalQuantity(){
  //   this.totalQuantity.customerDetails.itemDetails.reduce((total:any, item:any)=>{
  //     return total + item.itemDetails.quantity;
  //   },0)
  // }
  deleteCustomerDetails(totals_id: any){
     this.totals.deleteCustomerDetails(totals_id).subscribe((result)=>{
      //console.log(result);
      this.ngOnInit();
     });
  }
  // total = 0;

  // totalQuantity(){
  //   this.customerDetails.forEach(item=> {
  //     this.total = this.total + item.itemDetails.quantity;
  //   })
  // }
}
