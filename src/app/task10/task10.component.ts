import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task10',
  templateUrl: './task10.component.html',
  styleUrls: ['./task10.component.css']
})
export class Task10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opacity:string='';
  mouseOver()
  {
    this.opacity='0.5';
  }

  mouseOut()
  {
    this.opacity='';
  }
}

