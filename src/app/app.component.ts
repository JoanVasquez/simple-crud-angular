import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedEmployee: Employee = new Employee();
  employeeArray: Employee[] = [
    { id: 1, name: 'Ryan', country: 'USA' },
    { id: 2, name: 'Angelica', country: 'USA' },
    { id: 3, name: 'Joe', country: 'USA' }
  ];

  addOrEdit(): void {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }

    this.selectedEmployee = new Employee();
  }

  openForEdit(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  delete(): void {
    this.employeeArray = this.employeeArray.filter(item => item != this.selectedEmployee);
    this.selectedEmployee = new Employee();
  }

}
