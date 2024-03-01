import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: "app.component.html",
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  title = 'demo1';
  displayClickNumber(event : number):void{
    console.log('click number',event);
    
  }
  
}
