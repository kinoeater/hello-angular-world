import { Component } from '@angular/core';

@Component({

    selector: 'courses',
    template: ` 
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
            {{ course }}
            </li>
        </ul>

    `
    // 1) change single quote to back tick, so the benefit of using the back tick is you can break up the code to multiple 
    // lines so you can make it more readible

})

export class CoursesComponent{

     title = 'List of courses';

     courses = ["course1","course2","course3"];

}