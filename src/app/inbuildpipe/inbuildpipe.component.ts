import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuildpipe',
  templateUrl: './inbuildpipe.component.html',
  styleUrls: ['./inbuildpipe.component.css']
})
export class InbuildpipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  strData:string="Hope so you are enjoying Angular technology";
  num2:number=-452.78956324557;
  mydate=new Date();
}
