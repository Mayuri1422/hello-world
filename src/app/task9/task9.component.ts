import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task9',
  templateUrl: './task9.component.html',
  styleUrls: ['./task9.component.css']
})
export class Task9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mysize:string='';
  // onChange()
  // {
  //   this.size='400px';
  // }/

  keyDown(t1:any)
  {
    this.mysize=t1;
  }
}

