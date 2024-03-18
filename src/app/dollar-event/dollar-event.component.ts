import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dollar-event',
  templateUrl: './dollar-event.component.html',
  styleUrls: ['./dollar-event.component.css']
})
export class DollarEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(dollar:any)//dollar----->returns JSON Object
  {
    console.log(dollar);//dollar----->returns current DOM Element Information
    console.log(dollar.target.value);//Dollar-Event from View File
  }
}

