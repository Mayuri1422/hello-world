import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
color_name:string="Blue";
border_ratings:number=4;
jsonObj={
  color:'Violet',//key->name of css property
  height:1.4,
  "font-family":"Ariel",//if we want css property name as it is then use quote(single/double)
  fontSize:'32px',
  fontWeight: 'bolder'
};
}
