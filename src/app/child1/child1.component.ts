import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  // @Input() Decorator used to send data from parent to child component
  // data-->string,number,boolean,any,jsonObj,array of object
  
  @Input() parentJson:any={};

  @Input() parentStrData:string='';

  @Input() parentArrayObj:any=[];
}
