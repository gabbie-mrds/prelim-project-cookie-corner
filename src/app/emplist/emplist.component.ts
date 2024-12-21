import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emplist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './emplist.component.html',
  styleUrl: './emplist.component.css'
})
export class EmplistComponent {

  ifAdmin = false;

  showDetails(){
    this.ifAdmin = !this.ifAdmin
  }
  /*dontShowDetails(){
    return !this.ifAdmin;
  }*/

  emp: empList [] = [

    {empphoto: "emp/gmrds.png",
      empNum: "E001",
      empName: "Gabrielle Delos Santos",
      empPosition: "Web Developer",
      gender: "Female",
      email: "gabmrds@gmail.com",
      empStatus: "Full-Time",
      salary: "Php 50,000"
    },

    {empphoto: "emp/acd.png",
      empNum: "E002",
      empName: "Abby Dizon",
      empPosition: "Pastry Chef",
      gender: "Female",
      email: "acdizon@gmail.com",
      empStatus: "Full-Time",
      salary: "Php 60,000"},

    {empphoto: "emp/ap.png",
      empNum: "E003",
      empName: "Almina Tanglao",
      empPosition: "Social Media Manager",
      gender: "Female",
      email: "tanglaoalmina@gmail.com",
      empStatus: "Full-Time",
      salary: "Php 50,000"},
  ]
}

export interface empList {
  empphoto: string;
  empNum: string;
  empName: string;
  empPosition: string;
  gender: string;
  email: string;
  empStatus: string;
  salary: string;
}
