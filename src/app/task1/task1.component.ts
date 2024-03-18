import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// onChange(check:any)
// {
//   console.log(check);
//   if(check.length>10)
//   {
//     alert("Exceeds Max Length");
//   }
// }

onClick(check:string)
{
  if(check.length>5)
  {
    alert("String Exceeds Maximum Length");
  }
  else{
    console.log(check);
  }
}
}
