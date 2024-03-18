import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.css']
})
export class TaskOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result1:number=0;
  onClickS(n:any): void
  {
  this.result1=n*n;
  }

  onClickC(n:any): void
  {
  this.result1=n*n*n;
  } 
}
