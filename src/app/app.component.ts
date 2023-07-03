import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Orders-Page';

  store(): void{
    alert('TEST')
  }
  displayVal:string=''
  getValue(val:string)
  {
    console.warn(val)
    this.displayVal=val
  }

}
