import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard-event',
  templateUrl: './keyboard-event.component.html',
  styleUrls: ['./keyboard-event.component.css']
})
export class KeyboardEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp()
  {
    console.log("key up event occurs");
  }

  onKeyDown()
  {
    console.log("key down event occurs");
  }
}
