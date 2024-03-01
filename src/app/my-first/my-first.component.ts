import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-first',
  templateUrl: './my-first.component.html',
  styleUrls: ['./my-first.component.scss']
})
export class MyFirstComponent {

  @Input()
  label:string='';
  counter:number=0;
  eventName:string="";

  incrementCounter(): void{
    this.eventName="click";
    this.counter++;
  }

}
