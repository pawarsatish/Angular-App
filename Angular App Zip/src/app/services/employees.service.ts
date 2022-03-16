import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  getEmployees() {
      return this.http.get(`https://retoolapi.dev/iM9Vc5/employees`);
  }
  searchEmployees(column:any,searchCriteria:any){
    return this.http.get(`https://retoolapi.dev/iM9Vc5/employees?`+ column + "=" + searchCriteria );
  }
}