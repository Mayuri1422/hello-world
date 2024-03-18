import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref-variable',
  templateUrl: './template-ref-variable.component.html',
  styleUrls: ['./template-ref-variable.component.css']
})
export class TemplateRefVariableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Accessing the Data
  onClick(name:any)
  {
    console.log(name);
    console.log("Value-> "+name.value);
    //Manipulating the Data
    name.style.color="blue";
    name.style.background=`orange`;
  }

  // onClick(value:string)
  // {
  //   //Can't Manipulate
  //   console.log("Value-> "+value);
  // }

  // Real Time Example
  result:number=0;
  add(n1:any,n2:any)
  {
     let num1=+n1;//+(Miscellinous Operator)(converts string number into number)
     let num2=+n2;
     this.result=num1+num2;
  }
}
