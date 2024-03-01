import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output()
  myClickEvent:EventEmitter<number>=new EventEmitter<number>();


  incrementCounter(): void{
    this.eventName="click";
    this.counter++;
    this.myClickEvent.emit(this.counter);
  }

}
