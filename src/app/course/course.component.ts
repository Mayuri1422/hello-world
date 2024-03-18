import { Component, OnInit } from '@angular/core';
import { CourseService } from '../utility/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  constructor(private service:CourseService) { //dependency injection only applicable on constructor level

    // CourseService----->register in providers in app.module.ts
    // private service----->making class property by using private/public/protected to access in anywhere in class
    // let service=new CourseService();
    // this.mycourse=service.getCourse();
  }
  mycourse:string[]=[];
  ngOnInit(): void {
    this.mycourse=this.service.getCourse();

  }

}

