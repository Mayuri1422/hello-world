import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.css']
})
export class Task7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(un:string,pass:string)
  {
    if(un==("mayuri1422") && pass==("1234"))
    {
      alert('validated succesfully!!');
    }
    else{
      alert('wrong username and password');
    }
  }
}

