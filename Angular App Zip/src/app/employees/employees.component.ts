import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {  
  tableColumns = ["id","dob","email","gender","mobile","address","company","fullName","position"];
  employees:any[] = [];
  employeesSubs:Subscription;
  employeeSearchSub:Subscription;
  searchFilter:any =null;
  searchText:any = null;
  constructor(private empService:EmployeesService){
    this.employeesSubs = new Subscription();
    this.employeeSearchSub = new Subscription();
  }

  ngOnInit(){
   this.loadEmp();
  }
  loadEmp(){
    this.clearFilter();
  }
  clearFilter(){
    this.employeesSubs = this.empService.getEmployees().subscribe((emps:any) => {
      if(emps){
        emps.forEach((element:any) => {
          this.employees.push(element);
        });       
      }
    });
  }
  searchEmployees(){     
    if(this.searchFilter !== null && this.searchFilter !== undefined){
        if(this.searchText !== "" && this.searchText !== null){         
          this.employeeSearchSub = this.empService.searchEmployees(this.searchFilter,this.searchText).subscribe((emps:any) => {
            if(emps){
              this.employees = [];
              emps.forEach((element:any) => {
                this.employees.push(element);
              });       
            }
          });
        }
        else{
          alert('search text needed');    
        }
    }   
    else{     
      alert('please select the filter column');
    }
  }
  selectChange(event:any){
    console.log("event.target.value",event.target.value);
    if(event.target.value !== 0){
      this.searchFilter= event.target.value;
    }    
  }
  ngOnDestroy(){
    this.employeesSubs.unsubscribe();
    this.employeeSearchSub.unsubscribe();
  }
  
}
