import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  json={
    id:1,
    name:'Raahi',
    role:'Developer'
}

arryObj=[
  {
    id:1,
    name:'Mayuri'
  },
  {
    id:2,
    name:'Dipak'
  }
]

strData:string='Parent Data Send';
// we have to make custom attribute and then property bind



strDataRecieved:string='';
arrayObjectRecieved:any=[];
jsonObjectRecived:any={};
}


