import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result:string='';
  onClick(): void
  {
    this.result="../../assets/a1.jpg";
  }
}
