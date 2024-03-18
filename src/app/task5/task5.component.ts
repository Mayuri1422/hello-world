import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   
   arrObj=[
    {
      id:0,
      name:'',
      salary:0
    }
   ]
  add(t1:any,t2:any,t3:any)
  {
        this.arrObj.push(
          {
            id:t1,
            name:t2,
            salary:t3
          }
        )
  }
  remove(n:number)
  {
    this.arrObj.splice(n,1);
  }
}

