import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myClass:string='succes';
  flag:number=1;
  isError:boolean=false;
  isSpecial:boolean=true;

  jsonObj={
'succes':!this.isError,
'danger':this.isError,
'special':this.isSpecial  
  }
}