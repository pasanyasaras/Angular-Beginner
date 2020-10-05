import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  //templateUrl: './ngswitch.component.html',
  //templateUrl: './ngfor.component.html',
  templateUrl: './interaction.component.html',
 /*template:'<h2 class="text-success" *ngIf="true">'+
  'Welcome {{name}}'+
 '</h2>'+
 '<input [id]="myId" type="text" placeholder="Enter the text">'+
 '<button (click)="onClick()">Greet</button><br>'+
 '{{greeting}}<br><br>'+
 '<input [(ngModel)]="temp" type="text"><br>'+
 '{{temp}}',*/
  //styles:['.text']
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input('parentData') public namenew;
  @Output() public childEvent = new EventEmitter();

  public message="";

  public name="Pasan";
  public myId = "testId";
  public greeting="";
  public temp="";
  constructor() { }

  public color="blue"; // ngswitch example
  public colors=["red","blue","green","yellow"]; //ngFor Directive example

  ngOnInit(): void {
  }

  onClick()
  {
    console.log('You clicked the button!');
    this.greeting='Welcome to the program';
  }

  fireEvent()
  {
    this.childEvent.emit('Hey bro!');

  }

}
