import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string="Mayuri";
  num:number=6;
  image:string="../../assets/a1.jpg";
}