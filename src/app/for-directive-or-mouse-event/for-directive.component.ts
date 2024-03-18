import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  a:string[]=['Core Java','JDBC','Hibernate','Spring','SpringBoot','HTML','CSS','Angular12'];
  a1:any=[
    {
      name:"Asus",
      price:15000,
      qty:1
    },
    {
      name:"Samsung",
      price:25000,
      qty:1
    },
    {
      name:"Redmi",
      price:20000,
      qty:1
    },
    {
      name:"Realme",
      price:21000,
      qty:1
    }
  ]

  selector:string='';
  onMouseOver(p:any)
  {
    console.log("onMouseOver Event Occurs");
    this.selector=p.name;
    
  }

  onMouseOut()
  {
    this.selector='';
  }
}
