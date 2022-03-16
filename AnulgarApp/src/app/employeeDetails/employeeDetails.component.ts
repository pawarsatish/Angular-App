import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employeeDetails',
  templateUrl: './employeeDetails.component.html',
  styleUrls: ['./employeeDetails.component.css']
})
export class EmployeeDetailsComponent implements OnInit {      
  constructor(private empService:EmployeesService){    
  }

  ngOnInit(){
   
  } 
  ngOnDestroy(){    
  }
  
}
