import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myClass:string='';
  onClick()
  {
    this.myClass='myClass1';
  }
}
