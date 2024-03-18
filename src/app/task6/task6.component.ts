import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  result:string='';
  count:number=0;
onClick(n1:any)
{
  this.count=0;
  for(let i=1;i<=n1;i++)
  {
    if(n1%i==0)
    {
      this.count++;
    }
    if(this.count==2)
    this.result="Number is prime number";
    else
    this.result="Number is not prime number";
  }
}
}
