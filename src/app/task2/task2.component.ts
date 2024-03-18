import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 bgcolor:string='';
 color:string='';
 
  onClick()
  {
   this.bgcolor='pink';
   this.color='blue';
  }
}
