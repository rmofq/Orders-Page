import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { OrderDetailsService } from 'src/app/order-details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  onActivate(){
    window.scroll(0,0);
  }
  constructor(private totals:OrderDetailsService){}
  addDetailsControls(){
    return  (<FormArray>this.addDetails.get('itemDetails')).controls;
  }
  addDetails = new FormGroup({
    shipperName: new FormControl(''),
    shipperAddress: new FormControl(''),
    shipperCN: new FormControl(''),
    consigneeName: new FormControl(''),
    consigneeAddress: new FormControl(''),
    consigneeCN: new FormControl(''),
    addtnlInsRem: new FormControl(''),
    itemAmount: new FormControl(''),
    itemDetails: new FormArray([this.getDetailsFields()])

  });
  getDetailsFields(){
    return new FormGroup({
      itemDesc: new FormControl(''),
      unit: new FormControl(''),
      quantity: new FormControl(''),
      weight: new FormControl(''),
      volume: new FormControl('')
    })
  }
  // addItem({
  //   const control = <FormArray>this.addDetails.controls['itemDetails'];
  //   control.push(
  //     new FormGroup({
  //       itemDesc: new FormControl(''),
  //       unit: new FormControl(''),
  //       quantity: new FormControl(''),
  //       weight: new FormControl(''),
  //       volume: new FormControl('')
  //     })
  //     )
  //   })
  // removeItem(index){
  //   const control = <FormArray>this.addDetails.controls['contact'];
  //   control.removeAt(index);
  // }
  ngOnInit(): void {}
  itemDetailsArray(){
    return this.addDetails.get('itemDetails') as FormArray;
  }
  addItem(){
    this.itemDetailsArray().push(this.getDetailsFields());
  }
  removeItem(i: number){
    this.itemDetailsArray().removeAt(i);
  }
  SaveData(){
    this.totals.saveCustomerDetails(this.addDetails.value).subscribe((result)=>{console.log(result);});
  }

}
