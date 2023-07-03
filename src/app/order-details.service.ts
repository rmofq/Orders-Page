import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {
  url = 'http://localhost:3000/customer-details';
  url2 = 'http://localhost:3000/total-amount';
  constructor(private http:HttpClient) { }
  showDetails(){
    return this.http.get(this.url)
  }
  amountDetails(){
    return this.http.get(this.url2)
  }
  saveCustomerDetails(data: any){
    console.log(data);
    return this.http.post(this.url,data);
  }
  saveCustomerDetailsAm(data: any){
    console.log(data);
    return this.http.post(this.url2,data);
  }
  deleteCustomerDetails(id: any){
    return this.http.delete(`${this.url}/${id}`);
  }
}
