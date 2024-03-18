import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Output() child2StrEvent=new EventEmitter();
  strData:string='Data send to parent';
  onClick()
  {
    this.child2StrEvent.emit(this.strData);
  }


  @Output() childArrayObject=new EventEmitter();
  arrayProduct=[
    {
      pid:1,
      pname:'pen',
      price:7
    },
    {
      pid:2,
      pname:'pencil',
      price:5
    }
  ]
  onSend()
  {
    this.childArrayObject.emit(this.arrayProduct);
  }


  @Output() childJsonObject=new EventEmitter();
  jsonObject={
    pid:1,
    pname:'pen',
    price:7
  }
  send(): void
  {
    this.childJsonObject.emit(this.jsonObject);
  }
}
