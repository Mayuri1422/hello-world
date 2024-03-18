import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// onClick()
// {
//   console.log("Click Event Occurs");
// }
c:number=0;
onClick()
{
if(this.c==0)
{
  console.log("Click Event Occurs");
  this.c++;
}
}

onImageClick()
{
  console.log("Click Event Occur On Image");
}

myImage:string=`../../assets/a1.jpg`;
clickOnImage()
{
  console.log("Image Click");
}
}
