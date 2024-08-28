import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsService } from './students.service';
import { NgFor } from '@angular/common';
import { Customers } from './customers';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular_http';

  studentService: StudentsService = inject(StudentsService);
  customers: Customers[] = [];

  constructor() {
    this.studentService.getCustomers().subscribe((result:any) => {
      this.customers = result;
      console.log('HERE', result);
    });

    this.studentService.deleteStudent(2).subscribe((result) => {
      console.log('HERE', result);
      this.students = result;
    });
  }
  students: any;
}
