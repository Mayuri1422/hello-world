import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-event',
  templateUrl: './change-event.component.html',
  styleUrls: ['./change-event.component.css']
})
export class ChangeEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange()
  {
    console.log("Change Event Occurs");
  }

  //Task
  onChange1(t1:any)
  {
    if(t1.length>12)
    alert(t1+" exceeds max length");
    else
    console.log(t1);
  }
}
