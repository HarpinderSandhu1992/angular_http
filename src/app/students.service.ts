import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudents() {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      Aceept: 'application/json',
    });
    const options = { header: headers };
    return this.http.get('http://localhost:3000/students/');
  }

  deleteStudent(id: number) {
    return this.http.delete('http://localhost:3000/delete_student/' + id);
  }

  getCustomers() {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      Aceept: 'application/json',
    });
    const options = { header: headers };
    return this.http.get('https://api-students-u137.onrender.com/customers');
  }
}
