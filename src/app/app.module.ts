import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { Task1Component } from './task1/task1.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { DollarEventComponent } from './dollar-event/dollar-event.component';
import { TemplateRefVariableComponent } from './template-ref-variable/template-ref-variable.component';
import { ChangeEventComponent } from './change-event/change-event.component';
import { KeyboardEventComponent } from './keyboard-event/keyboard-event.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { ForDirectiveComponent } from './for-directive-or-mouse-event/for-directive.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { Task5Component } from './task5/task5.component';
import { Task6Component } from './task6/task6.component';
import { Task7Component } from './task7/task7.component';
import { Task2Component } from './task2/task2.component';
import { Task8Component } from './task8/task8.component';
import { Task9Component } from './task9/task9.component';
import { Task10Component } from './task10/task10.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { InbuildpipeComponent } from './inbuildpipe/inbuildpipe.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './utility/course.service';
@NgModule({
  declarations: [
    AppComponent,EmployeeComponent, StudentComponent, StringInterpolationComponent, PropertyBindingComponent, StyleBindingComponent, Task1Component, ClassBindingComponent, EventBindingComponent, DollarEventComponent, TemplateRefVariableComponent, ChangeEventComponent, KeyboardEventComponent, TwoWayBindingComponent, StructuralDirectiveComponent, ForDirectiveComponent, SwitchDirectiveComponent, TaskOneComponent, Task3Component, Task4Component, Task5Component, Task6Component, Task7Component, Task2Component, Task8Component, Task9Component, Task10Component, ParentComponent, Child1Component, Child2Component, InbuildpipeComponent, CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
