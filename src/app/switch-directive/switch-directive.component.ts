import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrls: ['./switch-directive.component.css']
})
export class SwitchDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  choice:string='';
  onClick(colorName:string)
  {
    this.choice=colorName.toLowerCase().trim();
  }
}